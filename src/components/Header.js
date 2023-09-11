import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import LogoImage from "@/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter()
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex justify-center items-center">
                {/* LOGO */}
                <Image src={LogoImage} width={50} height={40} />
                <Link href="/">
                  <h2 className="text-2xl text-white font-bold ">Pc Builder</h2>
                </Link>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose className="text-white" size={25} />
                  ) : (
                    <AiOutlineMenu className="text-white" size={25} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/category" onClick={() => setNavbar(!navbar)}>
                    Category
                  </Link>
                </li>

                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/login" onClick={() => setNavbar(!navbar)}>
                    Login/Register
                  </Link>
                </li>

                

                <li className="pb-6 text-xl text-white py-2 text-center  border-b-2 md:border-b-0">
                  <button onClick={() => router.push('/buildpc')} className="inline-block px-6 pb-2 pt-2.5 shadow-[0_4px_9px_-4px_#3b71ca]">
                    Build Pc
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
