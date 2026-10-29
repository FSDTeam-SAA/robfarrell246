export type PrimaryFunction = "LANDLORD_BROKER" | "TENANT_BUSINESS_OWNER";

export interface RegisterFormData {
  role: PrimaryFunction;
  fullName: string;
  company: string;
  workEmail: string;
  password: string;
  agreeToTerms: boolean;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    email: string;
    fullName: string;
    role: PrimaryFunction;
  };
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface VerifyEmailData {
  email: string;
  code: string;
}

export interface ResetPasswordData {
  password: string;
  confirmPassword: string;
}
