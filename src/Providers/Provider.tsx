"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
}

/**
 * NextAuth Session Provider client wrapper
 */
export default function AuthProvider({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
