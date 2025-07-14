"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  const menuItems = [
    {
      label: "Categories",
      subItems: [
        { label: "Sweets & Desserts", href: "/Categories/sweets" },
        { label: "Snacks & Savories", href: "/categories/namkeen" },
        { label: "Frozen Foods", href: "/Categories/Frozen" },
        { label: "Breads & Parathas", href: "/categories/bakery" },
        { label: "Biscuits & Cookies", href: "/categories/ready-to-eat" },
        { label: "Pickles & Spices", href: "/categories/horeca-snacks" },
        { label: "Non-Indian Asian", href: "/categories/speciality" },
        { label: "Namkeen & Mixtures", href: "/categories/speciality" },
      ],
    },
    { label: "About", href: "/Aboutus" },
    { label: "Blogs", href: "/Blogs" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 lg:py-11 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <Link href="/">
            <Image
              src="/shared/Gclogo.svg"
              alt="Gourmet Logo"
              width={92}
              height={92}
              priority
              className="rounded-md"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-semibold text-base relative">
          {menuItems.map(({ label, subItems, href }) => (
            <li key={label} className="relative group">
              {/* Main menu item */}
              {subItems ? (
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-yellow-600 transition-colors duration-200 font-semibold"
                  aria-haspopup="true"
                >
                  {label}
                  <svg
                    className="h-4 w-4 mt-0.5 text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={href ?? "#"}
                  className="hover:text-yellow-600 transition-colors duration-200 font-semibold"
                >
                  {label}
                </Link>
              )}

              {/* Dropdown menu */}
              {subItems && (
                <ul className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
                  {subItems.map(({ label: subLabel, href: subHref }) => (
                    <li
                      key={subLabel}
                      className="px-5 py-3 hover:bg-yellow-100 cursor-pointer whitespace-nowrap transition"
                    >
                      <Link href={subHref}>{subLabel}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button (desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            aria-label="Contact Us Now"
            className="relative flex items-center gap-3 bg-yellow-600 text-white rounded-full px-6 py-3 hover:bg-yellow-700 transition-colors duration-200 shadow-md group select-none"
          >
            <span className="relative flex items-center">
              <span className="absolute top-1 left-0 block h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
              <span className="pl-5">Contact Us Now</span>
            </span>

            <span
              className="flex items-center justify-center h-7 w-7 rounded-full bg-white text-yellow-600 transition-colors duration-200 group-hover:bg-yellow-100 group-hover:text-yellow-800"
              style={{ perspective: "500px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
                style={{ transformOrigin: "center" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>

            <style jsx>{`
              a.group:hover svg {
                transform: rotate(60deg);
              }
            `}</style>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col gap-6 px-6 py-6 text-gray-700 font-semibold">
            {menuItems.map(({ label, subItems, href }) => (
              <li key={label} className="flex flex-col">
                {!subItems && (
                  <Link
                    href={href ?? "#"}
                    className="cursor-pointer hover:text-yellow-600 transition-colors duration-200 text-left text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                )}
                {subItems && (
                  <>
                    <button
                      onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                      className="flex justify-between items-center hover:text-yellow-600 transition-colors duration-200 cursor-pointer text-left text-lg font-semibold"
                      aria-expanded={mobileCategoriesOpen}
                      aria-controls="categories-submenu"
                    >
                      {label}
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          mobileCategoriesOpen ? "rotate-180" : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileCategoriesOpen && (
                      <ul
                        id="categories-submenu"
                        className="mt-2 pl-6 flex flex-col gap-3 text-gray-600 text-base"
                      >
                        {subItems.map(({ label: subLabel, href: subHref }) => (
                          <li key={subLabel} className="cursor-pointer hover:text-yellow-600 transition-colors duration-200">
                            <Link href={subHref} onClick={() => setMobileMenuOpen(false)}>
                              {subLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="w-full flex justify-center items-center gap-2 bg-yellow-600 text-black rounded-full px-6 py-3 hover:bg-yellow-700 transition-colors duration-200 shadow-md text-lg font-semibold"
                aria-label="Contact Us Now"
                onClick={() => setMobileMenuOpen(false)}
              >
               <span className="relative inline-flex items-center gap-2">
  {/* Animated dot */}
  <span className="absolute -left-3 top-0.5 block h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

  {/* Text */}
  <span className="text-lg font-semibold text-white flex items-center gap-2 pl-4">
    Contact Us Now
  </span>
</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
