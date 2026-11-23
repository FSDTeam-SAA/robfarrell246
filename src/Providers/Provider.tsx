"use client";

import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: ProviderProps) {
  return <>{children}</>;
}
