import { useStoreToggle } from "@/hooks/use-store-toggle";
import cn from "@/lib/utils";
import React from "react";

interface LinkProps {
  title: string;
  url: string;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ title, url, className }) => {
  const { enabled } = useStoreToggle();

  return (
    <a
      href={url}
      className={cn(
        "w-full py-4 border rounded-lg inline-flex transition duration-300 items-center justify-center",
        enabled
          ? "bg-black/5 border-black/50 hover:border-black hover:border-[1.5px] hover:bg-[rgb(0,0,0)/0.02]"
          : "bg-white/10 border-white/50 hover:border-white hover:bg-white/5",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p
        className={cn(
          "text-base font-medium",
          enabled ? "text-black" : "text-white"
        )}
      >
        {title}
      </p>
    </a>
  );
};
