import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LogoImage from "@/assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#ecf0f3" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full mt-2 px-2 2xl:px-16">
        <Link href="/">
            <Image src={LogoImage} width={60} height={50}/>
        </Link>
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex mr-3">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/category">Category</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/login">LogIn</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/login">Register</Link>
            </li>
          </ul>
          <button className="mr-3 inline-block px-6 pb-2 pt-2.5 shadow-[0_4px_9px_-4px_#3b71ca]">
                Build Your Pc
              </button>
          {/* Hamburger Icon */}
          <div
            style={{ color: "#1f2937" }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-7 px-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">logo</Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/category">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                Category
                </li>
              </Link>
              <Link href="/login">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                LogIn
                </li>
              </Link>
              <Link href="/login">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Register
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
