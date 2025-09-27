import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll only affects desktop (lg and above)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Job Fairs", href: "/job-fairs" },
    { name: "Training", href: "/training" },
    // { name: "Campus Drives", href: "/campus-drives" },
    // { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* DESKTOP NAVBAR */}
      <div
        className={`hidden lg:flex items-center bg-white justify-between transition-all duration-500 max-w-5xl  mx-auto mt-2 rounded-2xl shadow-md py-2 px-6 `}
      >
        {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 w-40" />
          </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="transition-colors duration-300 text-gray-800 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/job-fairs"
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${isScrolled
                ? "bg-[#1F497D] text-white hover:bg-blue-800"
                : "bg-yellow-400 text-blue-900 hover:bg-yellow-500"
              }`}
          >
            Join Job Fair
          </Link>
        </div>
      </div>

      {/* MOBILE / TABLET NAVBAR */}
      <div className="flex lg:hidden items-center justify-between bg-white px-4 py-3">
        <div className="text-2xl">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 w-40" />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#1F497D] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1F497D] px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-2 border-b border-blue-500 text-white hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/job-fairs"
            className="block text-center mt-3 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Join Job Fair
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
