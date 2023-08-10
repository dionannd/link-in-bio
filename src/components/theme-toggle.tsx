"use client";

import { useStoreToggle } from "@/hooks/use-store-toggle";
import cn from "@/lib/utils";
import { Switch } from "@headlessui/react";
import Image from "next/image";

export const ThemeToggle = () => {
  const { enabled, setEnabled } = useStoreToggle();

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={cn(
        "relative inline-flex h-6 w-16 items-center rounded-full border",
        enabled ? "border-black/50 bg-black/5" : "border-white/50 bg-white/10"
      )}
    >
      {({ checked }) => (
        <span
          className={cn(
            "inline-flex h-8 w-8 transform rounded-full bg-white transition items-center justify-center",
            checked ? "translate-x-8" : "translate-x-0"
          )}
        >
          <Image
            src={checked ? "/icons/Sun.svg" : "/icons/MoonStars.svg"}
            width={16}
            height={16}
            alt={checked ? "Sun" : "Moon Stars"}
          />
        </span>
      )}
    </Switch>
  );
};
