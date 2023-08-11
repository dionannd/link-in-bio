import React from "react";
import { Link } from "./Link";
import { ILink } from "@/types/link.type";

interface LinksProps {
  links: ILink[];
}

export const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <div className="flex flex-col space-y-4 w-full items-center p-6">
      {links.length ? (
        links.map((item, index) => (
          <Link key={index} title={item.title} url={item.url} />
        ))
      ) : (
        <p>Belum ada link</p>
      )}
    </div>
  );
};
