"use client";

import React from "react";
import { IconButton } from "./icon-button";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import InstagramIcon from "@/components/icons/instagram";
import FacebookIcon from "./icons/facebook";
import { useStoreUser } from "@/hooks/use-store-user";
import { useStoreToggle } from "@/hooks/use-store-toggle";

export const Sosmed = () => {
  const { sosial_media } = useStoreUser();
  const { enabled } = useStoreToggle();

  return (
    <div className="flex space-x-4 justify-center w-full items-center p-6">
      {sosial_media.github && (
        <IconButton
          href={sosial_media.github}
          icon={<GithubIcon fill={!enabled ? "white" : "black"} />}
        />
      )}
      {sosial_media.instagram && (
        <IconButton
          href={sosial_media.instagram}
          icon={<InstagramIcon fill={!enabled ? "white" : "black"} />}
        />
      )}
      {sosial_media.facebook && (
        <IconButton
          href={sosial_media.facebook}
          icon={<FacebookIcon fill={!enabled ? "white" : "black"} />}
        />
      )}
      {sosial_media.linkedin && (
        <IconButton
          href={sosial_media.linkedin}
          icon={<LinkedinIcon fill={!enabled ? "white" : "black"} />}
        />
      )}
    </div>
  );
};
