import Logo from "/src/assets/logo.svg";
import HamburgerIcon from "/src/assets/icon-hamburger.svg";
import CloseIcon from "/src/assets/icon-close.svg";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed h-20 left-0 right-0 flex items-center justify-between">
        <a href="/" aria-label="homepage" className="flex">
          <img src={Logo} alt="" />
        </a>
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          aria-label="open menu"
          className="flex"
        >
          <img src={sidebarOpen ? CloseIcon : HamburgerIcon} alt="" />
        </button>
        <div
          className={`fixed w-screen top-20 h-[calc(100vh-5rem)] bg-neutral-800 px-6 nav-pattern ${
            sidebarOpen ? "right-0 transition-all" : "right-[-100vw]"
          }`}
        >
          <ul
            className={`mt-10 w-full relative z-10 text-neutral-50 body-lg flex flex-col 
            items-center gap-6 md:mt-16`}
          >
            <li className="contents">
              <a href="/#">HOW WE WORK</a>
            </li>
            <li className="contents">
              <a href="/#">BLOG</a>
            </li>
            <li className="contents">
              <a href="/#">ACCOUNT</a>
            </li>
            <li className="contents">
              <a
                href="/#"
                className="w-full max-w-[20.4375rem] grid place-items-center h-14 border-[1.5px] border-neutral-50"
              >
                VIEW PLANS
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};
