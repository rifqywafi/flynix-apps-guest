import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuClass = ({ isActive }) =>
    `cursor-pointer ${isActive ? "text-secondary" : "hover:text-secondary"}`;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={`w-full py-5 top-0 z-20 sticky transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <div id="nav-logo">
          <NavLink to="/" className="text-2xl font-plaster font-bold text-primary">
            FlyNix
          </NavLink>
        </div>

        <div id="nav-menu" className="hidden md:flex gap-8 text-sm text-gray-700 items-center relative">
          <NavLink to="/booking" className={menuClass}>Pesan Tiket</NavLink>
          <NavLink to="/user-review" className={menuClass}>Reviews</NavLink>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-secondary hover:cursor-pointer focus:outline-none text-sm"
            >
              Tentang
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <NavLink
                  to="/about-us"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary hover:rounded-t-md text-sm"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Tentang Kami
                </NavLink>
                <NavLink
                  to="/our-team"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary hover:rounded-b-md text-sm"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Tim Kami
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/career" className={menuClass}>Karir</NavLink>
          <NavLink to="/faq" className={menuClass}>FAQ</NavLink>
          <NavLink to="/contact-us" className={menuClass}>Hubungi Kami</NavLink>

          {/* Dropdown */}
          
        </div>

        <div id="nav-auth" className="hidden md:flex items-center gap-4 text-sm">
          <button className="cursor-pointer hover:text-secondary">Masuk</button>
          <button className="border-2 border-gray-500 text-black px-4 py-1 rounded-md hover:bg-gray-500 hover:text-white transition">
            Daftar
          </button>
        </div>

        <div className="md:hidden">{/* Tambahkan mobile menu jika dibutuhkan */}</div>
      </div>
    </div>
  );
}