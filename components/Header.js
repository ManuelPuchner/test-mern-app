import { useState } from 'react'

import NavLink from "components/NavLink";

function Header() {
  const [navState, setNavState] = useState(false);
  const handleToggler = (e) => {
    e.preventDefault();

    console.log(navState);
    setNavState(!navState);
  }
  return (
    <header className="flex justify-between w-full relative">
      <div className="branding">
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
      `}
      >
        <div className="links text-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/cart">
            {/* cart icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 block mx-auto"
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
          </NavLink>
        </div>

        <div className="nav-toggler absolute top-0 right-0 p-2" onClick={handleToggler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </div>
      </nav>

      <div className="nav-toggler transform rotate-180" onClick={handleToggler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </div>
    </header>
  );
}

export default Header;
