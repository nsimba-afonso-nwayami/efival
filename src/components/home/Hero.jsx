"use client";

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
  const slides = [
    {
      src: heroBg1,
      title: "Construção civil com qualidade, segurança e inovação",
      description: "A EFIVAL transforma projetos em estruturas sólidas e modernas em Angola.",
    },
    {
      src: heroBg2,
      title: "Engenharia moderna para projetos de grande escala",
      description: "Soluções completas em construção, reabilitação e infraestruturas.",
    },
    {
      src: heroBg3,
      title: "Transformamos ideias em estruturas reais",
      description: "Da fundação ao acabamento, entregamos excelência em cada detalhe.",
    },
  ];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
              <div className="relative w-full h-[90vh] flex items-center justify-center">
                {/* BACKGROUND: Clean & Direct */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay escuro uniforme e suave */}
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* CONTENT: Centralizado com Animações */}
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
                        className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95"
                      >
                        Pedir Orçamento
                      </Link>

                      <Link
                        href="/projetos"
                        className="border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-amber-950 px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
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
        /* Animação de entrada dos textos */
        .animate-content-in {
          animation: slideUpFade 1s ease-out forwards;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Paginação Centralizada e Estilizada */
        .hero-pagination-bullets {
          bottom: 40px !important;
          display: flex;
          justify-content: center;
          gap: 12px;
          width: 100% !important;
        }

        .hero-pagination-bullet {
          width: 12px;
          height: 4px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 2px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hero-pagination-bullet-active {
          background: #C9A85A !important; /* amber-500 */
          width: 30px;
        }
      `}</style>
    </section>
  );
}