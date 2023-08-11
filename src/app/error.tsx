"use client";

import { useStoreToggle } from "@/hooks/use-store-toggle";
import cn from "@/lib/utils";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { enabled } = useStoreToggle();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <div
      className={cn(
        "w-full flex flex-col items-center pt-14 space-y-4 h-screen bg-cover bg-center bg-no-repeat",
        enabled
          ? "bg-[url('/images/bg-mobile-light.jpg')] sm:bg-[url('/images/bg-mobile-light.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')] lg:bg-[url('/images/bg-desktop-light.jpg')] xl:bg-[url('/images/bg-desktop-light.jpg')]"
          : "bg-[url('/images/bg-mobile.jpg')] sm:bg-[url('/images/bg-mobile.jpg')] md:bg-[url('/images/bg-desktop.jpg')] lg:bg-[url('/images/bg-desktop.jpg')] xl:bg-[url('/images/bg-desktop.jpg')]"
      )}
    >
      <h2
        className={cn(
          "font-semibold text-2xl",
          enabled ? "text-black" : "text-white"
        )}
      >
        Something went wrong!
      </h2>
      <button
        className={cn(
          "w-auto px-6 py-4 border rounded-lg inline-flex transition duration-300 items-center justify-center",
          enabled
            ? "text-black bg-black/5 border-black/50 hover:border-black hover:border-[1.5px] hover:bg-[rgb(0,0,0)/0.02]"
            : "bg-white/10 border-white/50 hover:border-white hover:bg-white/5"
        )}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
