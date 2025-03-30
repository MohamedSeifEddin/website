"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600">
          <Link href="/">Kyno</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="#about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-600 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-blue-600 transition">
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#work-experience"
              className="hover:text-blue-600 transition"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

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

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-blue-600 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out z-50 md:hidden`}
        >
          <ul className="flex flex-col items-center justify-center space-y-8 h-full">
            <li>
              <Link
                href="#about"
                className="text-xl font-medium hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-xl font-medium hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                className="text-xl font-medium hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#work-experience"
                className="text-xl font-medium hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-xl font-medium hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-xl font-medium hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
