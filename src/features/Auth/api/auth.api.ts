import {
  RegisterFormData,
  RegisterResponse,
  LoginFormData,
  VerifyEmailData,
  ResetPasswordData,
} from "../types/auth.types";

export const DEFAULT_REGISTER_DATA: RegisterFormData = {
  role: "LANDLORD_BROKER",
  fullName: "",
  company: "",
  workEmail: "",
  password: "",
  agreeToTerms: false,
};

export const DEFAULT_LOGIN_DATA: LoginFormData = {
  email: "sarah.jenkins@cbre-demo.com",
  password: "",
  rememberMe: false,
};

export async function loginUser(
  data: LoginFormData
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!data.email || !data.email.includes("@")) {
    throw new Error("Please enter a valid email address.");
  }

  if (!data.password || data.password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  return {
    success: true,
    message: "Signed in successfully! Welcome back.",
  };
}

export async function registerUser(
  data: RegisterFormData
): Promise<RegisterResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!data.workEmail || !data.password || !data.fullName) {
    throw new Error("Please complete all required fields.");
  }

  return {
    success: true,
    message: "Account created successfully! Welcome to Vision Before Lease.",
    user: {
      email: data.workEmail,
      fullName: data.fullName,
      role: data.role,
    },
  };
}

export async function verifyEmailCode(
  email: string,
  code: string
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (code.length !== 6) {
    throw new Error("Please enter all 6 digits of the verification code.");
  }

  return {
    success: true,
    message: `Email verified successfully for ${email}!`,
  };
}

export async function resendVerificationCode(
  email: string
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: `A new 6-digit verification code has been dispatched to ${email}.`,
  };
}

export async function resetPassword(
  data: ResetPasswordData
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!data.password || data.password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  if (data.password !== data.confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  return {
    success: true,
    message: "Your password has been changed and is ready to go.",
  };
}
