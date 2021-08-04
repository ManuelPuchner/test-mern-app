import { useState } from "react";
import Link from 'next/link'

import NavLink from "components/NavLink";
import Icon from "components/Icon";

function Header() {
  const [navState, setNavState] = useState(false);
  const handleToggler = (e) => {
    e.preventDefault();

    console.log(navState);
    setNavState(!navState);
  };
  return (
    <header
      className="
      flex
      justify-between
      w-full
      relative
      select-none

      md:px-6
      md:bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500
    "
    >
      <Link href="/cart">
        <a className="md:hidden">
          <Icon className="h-10 w-10 m-3 rounded-md bg-yellow-400">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Icon>
        </a>
      </Link>

      <div className="branding text-xl self-center">
        <h1>ShopApp</h1>
      </div>
      <nav
        className={`
        fixed transform 
        ${navState ? "-translate-x-0" : "-translate-x-full"}
        transition duration-300 ease-out h-full w-full
        bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500
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
        <div className="links text-center text-xl md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/cart">
            {/* cart icon */}
            <Icon className="h-8 w-8 block mx-auto md:ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Icon>
          </NavLink>
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
