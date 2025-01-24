"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600">
          <Link href="/">Kyno</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
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

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-6 space-y-4 md:space-y-0 items-center absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#work-experience"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Work Experience
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
