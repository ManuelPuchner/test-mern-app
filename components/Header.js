import { useState } from "react";
import Link from "next/link";

import NavLink from "components/NavLink";
import Icon from "components/Icon";

function Header({isHomepage}) {
  const [navState, setNavState] = useState(false);
  const handleToggler = (e) => {
    e.preventDefault();
    setNavState(!navState);
  };
  return (
    <header
      className={`
      flex
      justify-between
      w-full
      relative
      select-none
      ${isHomepage ? "text-white" : null}

      z-30
      md:px-6
      md:bg-gradient-to-l from-red-500 via-pink-500 to-blue-800
    `}
    >
      <Link href="/parties">
        <a className="md:hidden">
          <Icon className="h-10 w-10 m-3 rounded-md bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="
                p-1
                hover:animate-pulse
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              />
            </svg>
          </Icon>
        </a>
      </Link>

      <div className="branding text-xl self-center font-bold tracking-widest">
        <h1>PartyLocate</h1>
      </div>
      <nav
        className={`
        fixed transform 
        ${navState ? "-translate-x-0" : "-translate-x-full"}
        transition duration-300 ease-out h-full w-full
        bg-gradient-to-b from-red-500 via-pink-500 to-blue-800
        flex items-center justify-center
        z-10

        md:-translate-x-0
        md:transition-none
        md:h-auto
        md:w-auto
        md:bg-none
        md:static
        
      `}
      >
        <div
          className="
            links text-center text-xl
            md:flex md:text-base
          "
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/parties">Parties</NavLink>
          <NavLink href="/friends">Friends</NavLink>
        </div>

        <div
          className="nav-toggler absolute top-0 right-0 md:hidden"
          onClick={handleToggler}
        >
          {/* close nav icon */}
          <Icon className="h-10 w-10 m-3 rounded-md bg-gray-800 bg-opacity-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="
                h-6 w-6 p-1
                transform hover:rotate-360 focus:rotate-360 transition duration-300  
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Icon>
        </div>
      </nav>

      <div
        className="nav-toggler transform rotate-180 top-0 right-0 md:hidden"
        onClick={handleToggler}
      >
        {/* open nav icon */}
        <Icon className="w-10 h-10 m-3 bg-pink-500 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              h-6 w-6 p-1
              transform hover:rotate-360 focus:rotate-360 transition duration-300
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </Icon>
      </div>
    </header>
  );
}

export default Header;
