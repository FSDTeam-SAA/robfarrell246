import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/credit", destination: "/Credit" },
      { source: "/projects", destination: "/Project" },
      { source: "/settings", destination: "/Settings" },
      { source: "/help-support", destination: "/HelpSupport" },
    ];
  },
};

export default nextConfig;
