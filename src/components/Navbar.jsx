import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuClass = ({ isActive }) =>
    `cursor-pointer ${isActive ? "text-secondary" : "hover:text-secondary"}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change (optional, for better UX)
  useEffect(() => {
    if (!mobileOpen) return;
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [mobileOpen]);

  return (
    <div
      id="navbar"
      className={`w-full py-3 top-0 z-20 sticky transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <div id="nav-logo">
          <NavLink
            to="/"
            className="text-2xl font-montserrat font-bold text-primary"
          >
            <div className="flex flex-row items-center gap-2">
              <img src="/images/flynix-logo.png" className="h-10 w-auto" alt="flynix" />
              FLYNIX
            </div>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div
          id="nav-menu"
          className="hidden md:flex gap-8 text-sm text-gray-700 items-center relative"
        >
          <NavLink to="/booking" className={menuClass}>
            Pesan Tiket
          </NavLink>
          <NavLink to="/user-review" className={menuClass}>
            Reviews
          </NavLink>

          {/* Dropdown Perusahaan */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="hover:text-secondary hover:cursor-pointer text-sm"
            >
              Perusahaan
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 z-50"
            >
              <li>
                <NavLink to="/about-us" className="text-gray-700 text-sm">
                  Tentang Kami
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-team" className="text-gray-700 text-sm">
                  Tim Kami
                </NavLink>
              </li>
              <li>
                <NavLink to="/career" className="text-gray-700 text-sm">
                  Karir
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Dropdown Kontak & Bantuan */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="hover:text-secondary hover:cursor-pointer text-sm"
            >
              Kontak & Bantuan
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 z-50"
            >
              <li>
                <NavLink to="/faq" className="text-gray-700 text-sm">
                  Bantuan/FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-gray-700 text-sm">
                  Hubungi Kami
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Dropdown Informasi */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="hover:text-secondary hover:cursor-pointer text-sm"
            >
              Informasi
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 z-50"
            >
              <li>
                <NavLink to="/katalog" className="text-gray-700 text-sm">
                  Katalog
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="text-gray-700 text-sm">
                  Daftar Harga
                </NavLink>
              </li>
              <li>
                <NavLink to="/article" className="text-gray-700 text-sm">
                  Artikel
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Auth */}
        <div
          id="nav-auth"
          className="hidden md:flex items-center gap-4 text-sm"
        >
          <a
            className="cursor-pointer hover:text-secondary text-left"
            href="https://fly-nix-administrator.vercel.app/"
            target="_blank" // opsional, agar buka di tab baru
            rel="noopener noreferrer" // opsional, untuk keamanan jika target _blank
          >
            Masuk
          </a>
          <button className="border-2 border-gray-500 text-black px-4 py-1 rounded-md hover:bg-gray-500 hover:text-white transition">
            Daftar
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl text-primary focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h20M4 14h20M4 21h20" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full z-50">
          <div className="flex flex-col gap-2 px-6 py-4 text-gray-700 text-base">
            <NavLink
              to="/booking"
              className={menuClass}
              onClick={() => setMobileOpen(false)}
            >
              Pesan Tiket
            </NavLink>
            <NavLink
              to="/user-review"
              className={menuClass}
              onClick={() => setMobileOpen(false)}
            >
              Reviews
            </NavLink>
            {/* Dropdown Perusahaan */}
            <details className="dropdown w-full">
              <summary className="py-2 px-1 hover:text-secondary cursor-pointer font-semibold">
                Perusahaan
              </summary>
              <ul className="menu bg-white rounded-box p-2 w-full">
                <li>
                  <NavLink
                    to="/about-us"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Tentang Kami
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/our-team"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Tim Kami
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/career"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Karir
                  </NavLink>
                </li>
              </ul>
            </details>
            {/* Dropdown Kontak & Bantuan */}
            <details className="dropdown w-full">
              <summary className="py-2 px-1 hover:text-secondary cursor-pointer font-semibold">
                Kontak & Bantuan
              </summary>
              <ul className="menu bg-white rounded-box p-2 w-full">
                <li>
                  <NavLink
                    to="/faq"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Bantuan/FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-us"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hubungi Kami
                  </NavLink>
                </li>
              </ul>
            </details>
            {/* Dropdown Informasi */}
            <details className="dropdown w-full">
              <summary className="py-2 px-1 hover:text-secondary cursor-pointer font-semibold">
                Informasi
              </summary>
              <ul className="menu bg-white rounded-box p-2 w-full">
                <li>
                  <NavLink
                    to="/katalog"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Katalog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Daftar Harga
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/article"
                    className="text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Artikel
                  </NavLink>
                </li>
              </ul>
            </details>
            {/* Auth Buttons */}
            <div className="flex flex-col gap-2 mt-2">
              <a
                className="cursor-pointer hover:text-secondary text-left"
                href="https://fly-nix-administrator.vercel.app/"
                target="_blank" // opsional, agar buka di tab baru
                rel="noopener noreferrer" // opsional, untuk keamanan jika target _blank
              >
                Masuk
              </a>
              <button className="border-2 border-gray-500 text-black px-4 py-1 rounded-md hover:bg-gray-500 hover:text-white transition text-left">
                Daftar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
