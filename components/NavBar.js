import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const NavLinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "PROJECTS", path: "/" },
    { title: "PUBLICATIONS", path: "/" },
    { title: "PARTNERS", path: "/" },
    { title: "CONTACT US", path: "/" },
  ];
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <nav className="relative w-full md:fixed bg-footerBackgroundColor bg-opacity-50 left-0 top-0 ease-in duration-100 z-10">
      <div className="flex justify-between px-5 md:px-28 md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block space-x-5">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo-white.svg"
                className=""
                alt=""
                width={100}
                height={35}
              />
            </a>
          </Link>
        </div>

        <div className="hidden md:inline">
          <ul className="hidden items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NavLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white text-sm font-semibold hover:text-ecffSecondary hover:underline focus:text-ecffSecondary focus:underline scroll:g-gray-300"
                >
                  <Link href={link.path}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <GiHamburgerMenu
          onClick={showMenu}
          className="h-10 w-10 text-white block md:hidden focus:outline-none my-3 md:my-5 "
        />
        <ul
          className={
            active
              ? "absolute z-10 w-3/4 h-1/2 flex-col  text-white text-xl flex items-end  inset-0 uppercase bg-transparent-400 backdrop-blur-lg gap-8 p-8 md:hidden"
              : "hidden"
          }
        >
          <AiOutlineClose
            onClick={showMenu}
            className="h-12 w-12 text-black text-3xl block hamburger md:hidden focus:outline-none"
          />
          {NavLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="text-white text-xl font-semibold hover:text-ecffSecondary hover:underline focus:text-ecffSecondary focus:underline "
              >
                <Link href={link.path}>
                  <a>{link.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
