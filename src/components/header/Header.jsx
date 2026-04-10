"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? "bg-white/90 backdrop-blur-lg py-3 shadow-lg border-b border-slate-200" 
          : "bg-transparent py-6 border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="group flex flex-col items-start leading-none"
        >
          <span className={`font-extrabold text-2xl tracking-tighter transition-colors duration-300 ${scrolled ? "text-amber-800" : "text-white"}`}>
            EFIVAL
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${scrolled ? "text-amber-600" : "text-white/80"}`}>
            Engenharia & Valor
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl focus:outline-none transition-colors ${scrolled ? "text-amber-800" : "text-white"}`}
          aria-label="Menu"
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"} transition-transform duration-300 ${open ? "rotate-90" : ""}`}></i>
        </button>

        {/* NAVIGATION */}
        <nav
          className={`
            absolute md:static left-0 top-full w-full md:w-auto
            ${scrolled || open ? "bg-white md:bg-transparent" : "bg-transparent"}
            flex flex-col md:flex-row items-center gap-8
            px-8 md:px-0 py-8 md:py-0
            font-medium
            transition-all duration-300 ease-in-out
            ${open 
              ? "opacity-100 translate-y-0 visible border-b border-slate-200 shadow-xl" 
              : "opacity-0 -translate-y-4 invisible md:visible md:opacity-100 md:translate-y-0"
            }
          `}
        >
          {[
            { name: "Início", href: "/" },
            { name: "Serviços", href: "/servicos" },
            { name: "Sobre", href: "/sobre" },
            { name: "Projetos", href: "/projetos" },
            { name: "Contato", href: "/contato" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`
                relative group text-sm uppercase tracking-widest transition-colors
                ${scrolled ? "text-slate-700 hover:text-amber-600" : "text-white md:text-white hover:text-amber-200"}
              `}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="
              relative overflow-hidden
              bg-amber-500 hover:bg-amber-600
              text-white px-7 py-2.5 rounded-sm
              text-sm font-bold uppercase tracking-wider
              transition-all duration-300 shadow-md
              active:scale-95
            "
          >
            Pedir Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
