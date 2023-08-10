import cn from "@/lib/utils";
import React from "react";

interface FooterProps {
  enabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ enabled }) => {
  return (
    <div className="flex items-center justify-center p-6">
      <p
        className={cn(
          "text-sm leading-6",
          enabled ? "text-black" : "text-white"
        )}
      >
        Copyright &copy;{new Date().getFullYear()} Dionannd. All rights reserved
      </p>
    </div>
  );
};
