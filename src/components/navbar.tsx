// components/Navbar.tsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full top-0 z-50 fixed">
      <div className="flex mx-auto max-w-7xl py-3 px-4 justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-blue-600">
          MyLogo
        </Link>

        {/* เมนูปกติ (desktop) */}
        <ul className="font-medium text-gray-700 gap-8 hidden md:flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </ul>

        {/* ปุ่ม toggle สำหรับมือถือ */}
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

      {/* เมนูมือถือ */}
      {open && (
        <ul className="bg-white font-medium space-y-3 shadow-md py-4 px-6 text-gray-700 md:hidden">
          <NavItem to="/" onClick={() => setOpen(false)}>
            Home
          </NavItem>
          <NavItem to="/about" onClick={() => setOpen(false)}>
            About
          </NavItem>
          <NavItem to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavItem>
        </ul>
      )}
    </nav>
  );
}

function NavItem({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `block hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
