"use client";

import React from "react";
import { IconButton } from "./icon-button";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import InstagramIcon from "@/components/icons/instagram";
import FacebookIcon from "./icons/facebook";

interface SosmedProps {
  enabled: boolean;
}

export const Sosmed: React.FC<SosmedProps> = ({ enabled }) => {
  return (
    <div className="flex space-x-4 justify-center w-full items-center p-6">
      <IconButton
        href="https://github.com/dionannd"
        icon={<GithubIcon fill={!enabled ? "white" : "black"} />}
      />
      <IconButton
        href="https://www.instagram.com/dionannd_"
        icon={<InstagramIcon fill={!enabled ? "white" : "black"} />}
      />
      <IconButton
        href="https://web.facebook.com/dion.ananda"
        icon={<FacebookIcon fill={!enabled ? "white" : "black"} />}
      />
      <IconButton
        href="https://www.linkedin.com/in/dian-ananda-552a79152"
        icon={<LinkedinIcon fill={!enabled ? "white" : "black"} />}
      />
    </div>
  );
};
