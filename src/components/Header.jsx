
import { useState } from "react";
import {
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services", dropdown: true },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "How it works", href: "#process" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-container navbar relative z-50 flex items-center justify-between gap-4">
      {/* Logo */}
      <a
        href="#home"
        className="brand flex shrink-0 items-center gap-2"
        onClick={closeMenu}
      >
        <span className="brand-mark">
          <ShieldCheck size={23} />
        </span>

        <span>
          secure<span className="brand-accent">tech</span>
          <small className="block text-[9px] tracking-wider">
            SECURITY · REPAIR · ACCESSORIES
          </small>
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-teal-500"
          >
            {link.name}
            {link.dropdown && <ChevronDown size={13} />}
          </a>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="ml-auto flex shrink-0 items-center gap-2">
        <a
          className="nav-cta inline-flex items-center gap-2 whitespace-nowrap"
          href="#contact"
          onClick={closeMenu}
        >
          Let's talk <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-gray-200 bg-white p-4 text-gray-900 shadow-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-gray-100 hover:text-teal-600"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={15} />}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}