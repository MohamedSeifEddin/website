"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-6 relative">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 transition-colors duration-300">
          <Link href="/" aria-label="Mohamed - Home">
            Mohamed
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {[
            "about",
            "skills",
            "education",
            "work-experience",
            "projects",
            "contact",
          ].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="hover:text-blue-600 transition-colors relative py-2 group"
                onClick={() => {
                  document
                    .querySelector(`#${item}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 md:hidden focus:outline-none p-2"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-300"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-500 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`fixed top-0 left-0 w-72 h-full bg-blue-600 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-out z-50 md:hidden shadow-xl`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 focus:outline-none p-2"
                aria-label="Close navigation menu"
              >
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
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center p-6 border-b border-blue-500">
              <span className="text-2xl font-bold">Mohamed</span>
            </div>

            <ul className="flex flex-col space-y-4 p-6 overflow-y-auto flex-grow">
              {[
                "about",
                "skills",
                "education",
                "work-experience",
                "projects",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="text-lg font-medium block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        document
                          .querySelector(`#${item}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                  >
                    {item
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-6 border-t border-blue-500 text-center text-sm">
              &copy; {new Date().getFullYear()} Mohamed
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
