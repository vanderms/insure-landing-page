import Logo from "@/assets/logo.svg";
import React from "react";

const LinksSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <li>
      <p className="body-sm text-neutral-500 text-center xl:text-left">{title}</p>
      <ul className="mt-9 body-sm text-neutral-800 text-center flex flex-col gap-4 [&_a:hover]:underline xl:text-left">
        {children}
      </ul>
    </li>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative footer-pattern mt-[8.75rem] container bg-neutral-100 py-[5.5rem] xl:py-16 xl:mt-[9.375rem]">
      <div className="flex flex-col gap-8 items-center pb-10 border-b border-[#DADADA] xl:flex-row xl:justify-between xl:pb-9">
        <a href="/#" aria-label="homepage">
          <img src={Logo} alt="" />
        </a>
        <div className="flex gap-4">
          <a
            href="http://www.facebook.com"
            aria-label="facebook"
            target="_blank"
            className="social-media-icon"
          ></a>
          <a
            href="http://www.twitter.com"
            aria-label="twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon"
          ></a>
          <a
            href="http://www.pinterest.com"
            aria-label="pinterest"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon"
          ></a>
          <a
            href="http://www.instagram.com"
            aria-label="instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon"
          ></a>
        </div>
      </div>
      <ul className="mt-10 flex flex-col gap-10 items-center xl:mt-12 xl:flex-row xl:justify-between xl:pr-[10rem]">
        <LinksSection title="OUR COMPANY">
          <li>
            <a href="/#">HOW WE WORK</a>
          </li>
          <li>
            <a href="/#">WHY INSURE?</a>
          </li>
          <li>
            <a href="/#">CHECK PRICE</a>
          </li>
          <li>
            <a href="/#">REVIEWS</a>
          </li>
        </LinksSection>
        <LinksSection title="HELP ME">
          <li>
            <a href="/#">FAQ</a>
          </li>
          <li>
            <a href="/#">TERMS OF USE</a>
          </li>
          <li>
            <a href="/#">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="/#">COOKIES</a>
          </li>
        </LinksSection>
        <LinksSection title="CONTACT">
          <li>
            <a href="/#">SALES</a>
          </li>
          <li>
            <a href="/#">SUPPORT</a>
          </li>
          <li>
            <a href="/#">LIVE CHAT</a>
          </li>
        </LinksSection>
        <LinksSection title="OTHERS">
          <li>
            <a href="/#">CAREERS</a>
          </li>
          <li>
            <a href="/#">PRESS</a>
          </li>
          <li>
            <a href="/#">LICENSE</a>
          </li>
        </LinksSection>
      </ul>
    </footer>
  );
};
