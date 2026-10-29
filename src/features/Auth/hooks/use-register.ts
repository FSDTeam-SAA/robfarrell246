"use client";

import { useState } from "react";
import { RegisterFormData, PrimaryFunction } from "../types/auth.types";
import { DEFAULT_REGISTER_DATA, registerUser } from "../api/auth.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useRegister() {
  const router = useRouter();
  const [form, setForm] = useState<RegisterFormData>(DEFAULT_REGISTER_DATA);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelect = (role: PrimaryFunction) => {
    setForm((prev) => ({ ...prev, role }));
  };

  const handleFieldChange = (
    field: keyof RegisterFormData,
    value: string | boolean
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agreeToTerms) {
      toast.error("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    if (!form.fullName.trim()) {
      toast.error("Full Name is required.");
      return;
    }

    if (!form.workEmail.trim() || !form.workEmail.includes("@")) {
      toast.error("Please enter a valid work email address.");
      return;
    }

    if (!form.password || form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setIsLoading(true);
      const res = await registerUser(form);
      toast.success(res.message);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    toast.info("Connecting to Google OAuth authentication...");
  };

  return {
    form,
    showPassword,
    setShowPassword,
    isLoading,
    handleRoleSelect,
    handleFieldChange,
    handleSubmit,
    handleGoogleSignIn,
  };
}
