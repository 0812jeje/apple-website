import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Ways to contact me:{" "}
            <a
              href="https://www.linkedin.com/in/jason-iloppa-4baa831a7/"
              target="blank"
              className="underline text-blue"
            >
              Find me on LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="mailto:iloppajason@icloud.com"
              className="underline text-blue"
            >
              just send me a mail
            </a>
            .
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Jason Iloppa. All rights reserved.
            <div className="flex">
              {footerLinks.map((link, i) => (
                <p key={link} className="font-semibold text-gray text-xs">
                  {link}{" "}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </p>
              ))}
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
