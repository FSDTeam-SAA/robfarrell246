"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginFormData } from "../types/auth.types";
import { DEFAULT_LOGIN_DATA, loginUser } from "../api/auth.api";
import { toast } from "sonner";

export function useLogin() {
  const router = useRouter();
  const [form, setForm] = useState<LoginFormData>(DEFAULT_LOGIN_DATA);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (
    field: keyof LoginFormData,
    value: string | boolean
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!form.password || form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setIsLoading(true);
      const res = await loginUser(form);
      toast.success(res.message);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error.message || "Failed to sign in. Please verify your credentials.");
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
    handleFieldChange,
    handleSubmit,
    handleGoogleSignIn,
  };
}
