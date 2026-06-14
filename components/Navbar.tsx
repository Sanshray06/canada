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
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
              scrolled ? "bg-electric-blue" : "bg-white/20 border border-white/30"
            }`}
            style={{ background: scrolled ? "#1E6FFF" : undefined }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 7c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v5H8v-5z" />
            </svg>
          </div>
          <span
            className={`font-syne font-800 text-xl tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
            style={{ fontWeight: 800, color: scrolled ? "#0A1628" : "white" }}
          >
            Octopus<span style={{ color: "#1E6FFF" }}>Tech</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
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
                (e.currentTarget.style.color = scrolled
                  ? "#0A1628"
                  : "rgba(255,255,255,0.85)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "14px", textDecoration: "none" }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-0.5 rounded transition-all"
                style={{
                  background: scrolled ? "#0A1628" : "white",
                  width: i === 1 ? "75%" : "100%",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4 shadow-xl">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-inter text-navy font-medium border-b border-blue-50 text-sm"
              style={{ color: "#0A1628", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4 w-full justify-center"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none" }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
