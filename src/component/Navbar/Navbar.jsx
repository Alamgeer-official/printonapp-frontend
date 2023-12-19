import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import BrandLogo from "../../assets/printonapp.png";
import { Link,NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    to: "/home",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img className="w-8 h-8" src={BrandLogo} alt="SVG Image" />
          </span>
          <span className="font-bold">PrionOnApp</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={`inline-flex items-center text-sm font-semibold text-gray-800 hover:text-black hover:underline-offset-1 underline-bl`}
                >
                  {item.name}
                  <span>{/* <ChevronDown className="ml-2 h-4 w-4" /> */}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <button
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to={"signin"}>
            Sign In
            </Link>
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        className="w-8 h-8"
                        src={BrandLogo}
                        alt="SVG Image"
                      />
                    </span>
                    <span className="font-bold">PrintOnApp</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
