"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Projetos from "@/assets/img/projetos.jpg";

export default function BannerProjetos() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <section className="h-[60vh] bg-amber-950" />;

  return (
    <section className="relative h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">

      {/* IMAGEM */}
      <Image
        src={Projetos}
        alt="Projetos EFIVAL construção civil"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className={`${loaded ? "animate-content-in" : "opacity-0"}`}>

          {/* BREADCRUMB */}
          <div className="text-sm text-amber-300 mb-4 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / Projetos
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Nossos <span className="text-amber-400">Projetos</span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-amber-200 mt-6 text-lg">
            Portfólio de projetos de arquitetura e design interior, criados com foco em estética, funcionalidade e identidade.
          </p>

        </div>
      </div>

      {/* GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent"></div>

      {/* ANIMAÇÃO (MESMA DO HERO) */}
      <style jsx global>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-content-in {
          animation: slideUpFade 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

    </section>
  );
}
