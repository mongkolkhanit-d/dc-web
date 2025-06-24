'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className=" border-solid bg-[rgba(255,255,255,0.2)] 
    border-[1px] border-[rgba(255,255,255,0.3)] shadow-md w-full top-0 z-50 fixed backdrop-blur-sm"
    >
      <div className="flex mx-auto py-3 px-10 justify-between items-center">
        <Link href="/" className="font-bold text-white text-2xl">
          Logo
        </Link>

        {/* desktop-layout */}
        <ul className="font-medium text-white  gap-8 hidden md:flex">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/">Facilities</NavItem>
          <NavItem href="/">Services</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>

        {/* mobile-button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* mobile-layout */}
      {open && (
        <ul className="bg-white font-medium space-y-3 shadow-md py-4 px-6 text-gray-700 md:hidden">
          <NavItem href="/" onClick={() => setOpen(false)}>
            Home
          </NavItem>
          <NavItem href="/about" onClick={() => setOpen(false)}>
            About
          </NavItem>
          <NavItem href="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavItem>
        </ul>
      )}
    </nav>
  );
}

function NavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="text-black block hover:text-blue-500"
      >
        {children}
      </Link>
    </li>
  );
}
