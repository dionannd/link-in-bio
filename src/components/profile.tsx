import React from "react";
import Image from "next/image";
import cn from "@/lib/utils";

interface ProfileProps {
  enabled: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ enabled }) => {
  return (
    <div className="flex flex-col items-center py-6 gap-2 w-full">
      <Image
        src="/images/profile.png"
        width={112}
        height={112}
        alt="Profile"
        className={cn(
          "rounded-full border-2",
          enabled ? "border-black/50" : "border-white/50"
        )}
      />
      <p className={cn("text-sm", enabled ? "text-black" : "text-white")}>
        @dionannd
      </p>
    </div>
  );
};
