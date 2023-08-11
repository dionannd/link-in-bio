import { useStoreToggle } from "@/hooks/use-store-toggle";
import cn from "@/lib/utils";
import React from "react";

interface IconButtonProps {
  href?: string;
  icon: React.ReactElement;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  href,
  icon,
  className,
}) => {
  const { enabled } = useStoreToggle();

  return (
    <a
      href={href}
      className={cn(
        "rounded-full flex items-center justify-center w-10 h-10 transition-all duration-300 cursor-pointer",
        enabled ? "hover:bg-black/10" : "hover:bg-white/20",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
