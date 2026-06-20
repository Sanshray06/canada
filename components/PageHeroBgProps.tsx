"use client";
import { useEffect, useRef } from "react";

interface PageHeroBgProps {
  title: string;
  subtitle?: string;
}

export default function PageHeroBg({ title, subtitle }: PageHeroBgProps) {
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
    for (let i = 0; i < 40; i++) {
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
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0E1F3D 50%, #0A2460 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" style={{ pointerEvents: "none" }} />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,111,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16">
        <a
          href="/"
          className="inline-block mb-6 text-sm font-medium"
          style={{ color: "#4D91FF", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
        >
          ← Back to Home
        </a>
        <h1
           style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 6vw, 72px)",
              color: "#e9ebed",
              marginTop: "12px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          className="mb-3"
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}