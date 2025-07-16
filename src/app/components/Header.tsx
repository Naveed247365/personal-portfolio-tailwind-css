"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react or replace with svg

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md fixed w-full top-0 left-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-purple-700">Muhammad Naveed</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col bg-white md:bg-transparent md:static md:flex md:flex-row md:space-x-6 md:items-center md:w-auto space-y-4 md:space-y-0 p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/About" },
            { name: "Projects", href: "/Projects" },
            { name: "Skills", href: "/Skills" },
            { name: "Contact", href: "/Contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-semibold hover:text-purple-600 transition-colors ${
                  pathname === link.href ? "text-purple-600" : "text-gray-800"
                }`}
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
