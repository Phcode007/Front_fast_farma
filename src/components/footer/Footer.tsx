/* eslint-disable prefer-const */
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  let data = new Date().getFullYear();

  return (
    <div className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">Fast Farma | Copyright: {data}</p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon size={48} weight="bold" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon size={48} weight="bold" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogoIcon size={48} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}
