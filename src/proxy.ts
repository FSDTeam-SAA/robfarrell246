import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export type UserRole = "admin" | "manager" | "viewer";

// Role hierarchy levels for permission checks
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  admin: 3,
  manager: 2,
  viewer: 1,
};

// Route protection matrix
export const ROUTE_PERMISSIONS: { pattern: RegExp; minRole: UserRole }[] = [
  { pattern: /^\/admin/, minRole: "admin" },
  { pattern: /^\/settings\/security/, minRole: "admin" },
  { pattern: /^\/projects\/create/, minRole: "manager" },
  { pattern: /^\/projects\/edit/, minRole: "manager" },
  { pattern: /^\//, minRole: "viewer" },
];

/**
 * Validates whether a given user role satisfies the required minimum role
 */
export function hasRequiredRole(userRole: UserRole, requiredRole: UserRole): boolean {
  return (ROLE_HIERARCHY[userRole] || 0) >= (ROLE_HIERARCHY[requiredRole] || 0);
}

/**
 * Extracts and decodes user role from session cookie, header or auth token
 */
export function extractRoleFromRequest(req: NextRequest): UserRole {
  // Check header or session cookie
  const headerRole = req.headers.get("x-user-role") as UserRole;
  if (headerRole && ["admin", "manager", "viewer"].includes(headerRole)) {
    return headerRole;
  }

  const cookieRole = req.cookies.get("user_role")?.value as UserRole;
  if (cookieRole && ["admin", "manager", "viewer"].includes(cookieRole)) {
    return cookieRole;
  }

  // Default fallback role for development
  return "admin";
}

/**
 * Next.js RBAC routing proxy middleware handler
 */
export function rbacProxyMiddleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  // Skip static assets, internal Next.js requests
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const userRole = extractRoleFromRequest(request);

  // Match route pattern against permission matrix
  const matchedRule = ROUTE_PERMISSIONS.find((rule) => rule.pattern.test(pathname));

  if (matchedRule) {
    const isAuthorized = hasRequiredRole(userRole, matchedRule.minRole);

    if (!isAuthorized) {
      // If it's an API route, return 403 JSON
      if (pathname.startsWith("/api/")) {
        return NextResponse.json(
          {
            error: "Forbidden",
            message: `Your role '${userRole}' does not have sufficient permission for this endpoint. Required: '${matchedRule.minRole}'.`,
          },
          { status: 403 }
        );
      }

      // If page route, redirect to unauthorized / forbidden notice
      const redirectUrl = new URL("/", request.url);
      redirectUrl.searchParams.set("access_denied", "true");
      redirectUrl.searchParams.set("required_role", matchedRule.minRole);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // Inject current role into response headers for client inspection
  const response = NextResponse.next();
  response.headers.set("x-active-role", userRole);
  return response;
}

export default function proxy(request: NextRequest) {
  return rbacProxyMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
