import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll glow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 w-full z-50
          backdrop-blur-xl transition-all duration-500
          ${
            scrolled
              ? "bg-black/70 shadow-[0_0_40px_rgba(99,102,241,0.35)] border-b border-cyan-400/30"
              : "bg-black/40 shadow-[0_0_20px_rgba(34,211,238,0.15)] border-b border-white/10"
          }
        `}
      >
        <div className="px-6 md:px-10 py-4 flex justify-between items-center text-white">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Joshua Logo"
              className="h-10 w-10 drop-shadow-[0_0_12px_rgba(99,102,241,0.8)] hover:scale-110 transition"
            />
            <h1 className="font-bold text-lg md:text-xl text-primary">
              Joshua Suriyan | Web Developer
            </h1>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>

            {/* RESUME */}
            <a
              href="/Joshua Resume.pdf"
              download
              className="border px-4 py-1 rounded hover:bg-primary hover:text-black transition"
            >
              Resume
            </a>

            {/* THEME TOGGLE */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-xl hover:text-primary transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white md:hidden">
          <a onClick={() => setOpen(false)} href="#about" className="text-2xl">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#projects" className="text-2xl">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="text-2xl">
            Contact
          </a>

          <a
            href="/Joshua Resume.pdf"
            download
            className="border px-6 py-2 rounded text-xl hover:bg-primary hover:text-black transition"
          >
            Resume
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-2xl mt-4"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </>
  );
}
