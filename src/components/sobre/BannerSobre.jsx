"use client";

import Image from "next/image";
import Link from "next/link";
import Sobre from "@/assets/img/sobre.jpg";

export default function BannerSobre() {
  return (
    <section className="relative h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">

      {/* IMAGEM */}
      <Image
        src={Sobre}
        alt="Sobre EFIVAL construção civil"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* BREADCRUMB */}
        <div className="text-sm text-amber-300 mb-4 uppercase tracking-widest">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>{" "}
          / Sobre
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Sobre a <span className="text-amber-400">EFIVAL</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-amber-200 mt-6 text-lg">
          Construindo com qualidade, inovação e compromisso em cada projeto.
        </p>

      </div>

      {/* GRADIENT BOTTOM (transição suave para próxima seção) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent"></div>

    </section>
  );
}