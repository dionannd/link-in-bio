import React from "react";
import Image from "next/image";
import cn from "@/lib/utils";
import { useStoreUser } from "@/hooks/use-store-user";
import { useStoreToggle } from "@/hooks/use-store-toggle";

export const Profile = () => {
  const { name, image } = useStoreUser();
  const { enabled } = useStoreToggle();

  return (
    <div className="flex flex-col items-center py-6 gap-2 w-full">
      <Image
        src={image}
        width={112}
        height={112}
        alt="Profile"
        className={cn(
          "rounded-full border-2",
          enabled ? "border-black/50" : "border-white/50"
        )}
        priority
      />
      <p className={cn("text-sm", enabled ? "text-black" : "text-white")}>
        @{name}
      </p>
    </div>
  );
};
