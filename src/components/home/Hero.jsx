"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import heroBg1 from "@/assets/img/hero1.jpg";
import heroBg2 from "@/assets/img/hero2.jpg";
import heroBg3 from "@/assets/img/hero3.jpg";

export default function Hero() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

  const slides = [
    {
      src: heroBg1,
      title: "Arquitetura que transforma espaços em experiências",
      description: "Projetamos ambientes modernos, funcionais e sofisticados, pensados para o seu estilo de vida.",
    },
    {
      src: heroBg2,
      title: "Design interior com identidade e sofisticação",
      description: "Criamos espaços únicos, onde estética, conforto e detalhe se encontram em perfeita harmonia.",
    },
    {
      src: heroBg3,
      title: "Do conceito ao espaço final",
      description: "Desenvolvemos projetos completos de arquitetura e interiores com atenção a cada detalhe.",
    },
  ];

  if (!domLoaded) return <section className="h-screen bg-amber-950" />;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-50">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          modifierClass: "hero-pagination-",
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* BACKGROUND */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 text-center px-6 max-w-4xl">
                  <div className={`${isActive ? "animate-content-in" : "opacity-0"}`}>
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        href="/contato"
                        className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg"
                      >
                        Pedir Orçamento
                      </Link>

                      <Link
                        href="/projetos"
                        className="border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-amber-950 px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
                      >
                        Ver Projetos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* Animação de entrada suave */
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

        /* Paginação Customizada com a sua Paleta */
        .hero-pagination-bullets {
          bottom: 40px !important;
          display: flex;
          justify-content: center;
          gap: 10px;
          width: 100% !important;
        }

        .hero-pagination-bullet {
          width: 10px;
          height: 3px;
          background: #E0C67A !important; /* amber-300 - Dourado claro sutil */
          opacity: 0.4;
          border-radius: 99px;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .hero-pagination-bullet-active {
          background: #C9A85A !important; /* amber-500 - Dourado principal */
          opacity: 1 !important;
          width: 35px; /* Expande para dar foco */
        }
      `}</style>
    </section>
  );
}