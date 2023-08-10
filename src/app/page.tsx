"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { Links } from "@/components/links";
import { Profile } from "@/components/profile";
import { Sosmed } from "@/components/sosmed";
import { linksData } from "@/data/links";
import cn from "@/lib/utils";
import { useStoreToggle } from "@/hooks/use-store-toggle";

export default function Home() {
  const { enabled } = useStoreToggle();

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center bg-cover bg-center bg-no-repeat",
        enabled
          ? "bg-[url('/images/bg-mobile-light.jpg')] sm:bg-[url('/images/bg-mobile-light.jpg')] md:bg-[url('/images/bg-desktop-light.png')] lg:bg-[url('/images/bg-desktop-light.png')] xl:bg-[url('/images/bg-desktop-light.png')]"
          : "bg-[url('/images/bg-mobile.jpg')] sm:bg-[url('/images/bg-mobile.jpg')] md:bg-[url('/images/bg-desktop.png')] lg:bg-[url('/images/bg-desktop.png')] xl:bg-[url('/images/bg-desktop.png')]"
      )}
    >
      <div className="container transition-all duration-300 flex flex-col items-center pt-14 max-w-[360px] sm:max-w-[360px] md:max-w-[540px] lg:max-w-[540px] xl:max-w-[540px] w-full">
        <Profile enabled={enabled} />
        <ThemeToggle />
        <Links links={linksData} />
        <Sosmed enabled={enabled} />
        <Footer enabled={enabled} />
      </div>
    </main>
  );
}
