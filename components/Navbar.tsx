"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-blue-100/50 py-3 nav-scrolled"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
            style={{ background: scrolled ? "#1E6FFF" : "rgba(255,255,255,0.2)", border: scrolled ? "none" : "1px solid rgba(255,255,255,0.3)" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-white">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
          <span
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(16px, 4vw, 20px)", color: scrolled ? "#0A1628" : "white" }}
          >
            Cargo<span style={{ color: "#1E6FFF" }}>Sync</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: scrolled ? "#0A1628" : "rgba(255,255,255,0.85)",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? "#1E6FFF" : "white")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "#0A1628" : "rgba(255,255,255,0.85)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "14px", textDecoration: "none" }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-0.5 rounded transition-all duration-300"
                style={{
                  background: scrolled ? "#0A1628" : "white",
                  width: i === 1 ? "75%" : "100%",
                  transform: menuOpen
                    ? i === 0 ? "translateY(8px) rotate(45deg)" : i === 2 ? "translateY(-8px) rotate(-45deg)" : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 sm:px-6 py-4 shadow-xl">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 border-b border-blue-50 text-sm font-medium"
              style={{ color: "#0A1628", textDecoration: "none", fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4 w-full justify-center"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none", display: "flex" }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}