"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77, 145, 255, ${p.a})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(77, 145, 255, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      className="hero-diagonal relative min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0E1F3D 50%, #0A2460 100%)",
      }}
    >
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        style={{ pointerEvents: "none" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,111,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating decorative shapes */}
      <div
        className="absolute hidden sm:block float-shape"
        style={{ top: "20%", right: "8%", opacity: 0.12 }}
      >
        <svg viewBox="0 0 120 120" className="w-24 h-24 lg:w-32 lg:h-32">
          <polygon points="60,0 120,90 0,90" fill="none" stroke="#1E6FFF" strokeWidth="2" />
          <polygon points="60,20 100,80 20,80" fill="none" stroke="#4D91FF" strokeWidth="1" />
        </svg>
      </div>
      <div
        className="absolute hidden sm:block float-shape-delay"
        style={{ bottom: "25%", right: "20%", opacity: 0.08 }}
      >
        <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2" style={{ borderColor: "#1E6FFF" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-24 sm:pb-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8"
            style={{
              background: "rgba(30, 111, 255, 0.15)",
              border: "1px solid rgba(30, 111, 255, 0.3)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4D91FF" }} />
            <span
              style={{
                color: "#4D91FF",
                fontSize: "clamp(10px, 2.5vw, 13px)",
                fontFamily: "Syne, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Trucking Dispatch & Back-Office Support
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 6vw, 72px)",
              color: "white",
              lineHeight: 1.08,
              marginBottom: "20px",
            }}
          >
            Reliable Dispatch Support for{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1E6FFF, #4D91FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trucking Companies
            </span>{" "}
            Across North America
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "clamp(15px, 2.5vw, 18px)",
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "560px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            Professional dispatch coordination, back-office administration, and cross-border
            support - available when your fleet needs it most. We operate as an extension of
            your company so you can focus on growing your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a href="#contact" className="btn-primary" style={{ textDecoration: "none", justifyContent: "center" }}>
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Request a Callback
            </a>
            <a href="tel:+12049529246" className="btn-outline" style={{ justifyContent: "center" }}>
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Call Us Directly
            </a>
          </div>

          {/* Trust bar */}
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { n: "4+", l: "Expert Dispatchers" },
              { n: "2022", l: "Founded" },
              { n: "24/7", l: "Operational Support" },
              { n: "100%", l: "Dedicated to Your Fleet" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-2 sm:gap-3">
                <span
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(18px, 4vw, 24px)",
                    color: "#1E6FFF",
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "12px",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.3,
                    maxWidth: 80,
                  }}
                >
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2" style={{ transform: "translateX(-50%)" }}>
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "rgba(255,255,255,0.25)" }}
        >
          <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: "rgba(255,255,255,0.5)" }} />
        </div>
      </div>
    </section>
  );
}