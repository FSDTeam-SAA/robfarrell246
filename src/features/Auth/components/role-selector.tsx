"use client";

import React from "react";
import { PrimaryFunction } from "../types/auth.types";
import { Building2, Store } from "lucide-react";

interface RoleSelectorProps {
  selectedRole: PrimaryFunction;
  onSelectRole: (role: PrimaryFunction) => void;
}

export function RoleSelector({
  selectedRole,
  onSelectRole,
}: RoleSelectorProps) {
  const isLandlord = selectedRole === "LANDLORD_BROKER";
  const isTenant = selectedRole === "TENANT_BUSINESS_OWNER";

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-2">
      <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
        SELECT PRIMARY FUNCTION
      </div>

      <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch gap-4">
        {/* Role Option 1: LANDLORD / BROKER */}
        <div
          onClick={() => onSelectRole("LANDLORD_BROKER")}
          className={`flex-1 p-4 rounded-sm transition cursor-pointer flex flex-col justify-start items-start gap-2 select-none ${
            isLandlord
              ? "bg-action-secondary-hover outline outline-2 outline-offset-[-2px] outline-text-primary"
              : "bg-white outline outline-1 outline-offset-[-1px] outline-text-disabled hover:outline-slate-400"
          }`}
        >
          {/* Custom SVG Icon from Figma */}
          <div className="size-8 relative flex items-center justify-center text-text-primary">
            <Building2 className="size-7 stroke-[1.8]" />
          </div>

          <div className="self-stretch justify-start text-text-primary text-base font-bold font-['Montserrat']">
            LANDLORD / BROKER
          </div>
          <div className="self-stretch justify-start text-text-secondary text-xs font-normal font-['Montserrat'] leading-relaxed">
            Analyze the best business fit for a vacant retail location
          </div>
        </div>

        {/* Role Option 2: TENANT / BUSINESS OWNER */}
        <div
          onClick={() => onSelectRole("TENANT_BUSINESS_OWNER")}
          className={`flex-1 p-4 rounded-sm transition cursor-pointer flex flex-col justify-start items-start gap-2 select-none ${
            isTenant
              ? "bg-action-secondary-hover outline outline-2 outline-offset-[-2px] outline-text-primary"
              : "bg-white outline outline-1 outline-offset-[-1px] outline-text-disabled hover:outline-slate-400"
          }`}
        >
          <div className="size-8 relative flex items-center justify-center text-text-primary">
            <Store className="size-7 stroke-[1.8]" />
          </div>

          <div className="self-stretch justify-start text-text-primary text-base font-bold font-['Montserrat']">
            TENANT / BUSINESS OWNER
          </div>
          <div className="self-stretch justify-start text-text-secondary text-xs font-normal font-['Montserrat'] leading-relaxed">
            Analyze a business in a vacant retail space
          </div>
        </div>
      </div>
    </div>
  );
}
