"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";

import projeto1 from "@/assets/img/projeto1.jpg";
import projeto2 from "@/assets/img/projeto2.jpg";
import projeto3 from "@/assets/img/projeto3.jpg";
import projeto4 from "@/assets/img/projeto4.jpg";

export default function Projetos() {
  const projetos = [
    {
      title: "Edifício Residencial Moderno",
      category: "Construção Civil",
      img: projeto1,
    },
    {
      title: "Reabilitação de Escritórios",
      category: "Reabilitação",
      img: projeto2,
    },
    {
      title: "Infraestrutura Industrial",
      category: "Engenharia",
      img: projeto3,
    },
    {
      title: "Complexo Habitacional",
      category: "Construção Civil",
      img: projeto4,
    },
  ];

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">

      {/* DETALHE DECORATIVO */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-amber-500/5 skew-x-12 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-amber-950">
            Projetos que refletem <span className="text-amber-600">excelência</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg">
            Conheça alguns dos nossos projetos executados com qualidade,
            inovação e rigor técnico.
          </p>
        </motion.div>

        {/* SLIDER ANIMADO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            grabCursor={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >

            {projetos.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500">

                  {/* IMAGE */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="
                        object-cover w-full h-full
                        transition-transform duration-1000
                        group-hover:scale-110
                        group-active:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute inset-0 bg-amber-950/60
                        opacity-0
                        group-hover:opacity-100
                        group-active:opacity-100
                        transition-all duration-500
                        flex items-center justify-center
                      "
                    >
                      <div
                        className="
                          text-center px-6
                          transform translate-y-6
                          group-hover:translate-y-0
                          group-active:translate-y-0
                          transition-all duration-500
                        "
                      >
                        <span className="text-amber-300 text-xs uppercase tracking-widest">
                          {item.category}
                        </span>

                        <h3 className="text-white text-xl font-bold mt-2">
                          {item.title}
                        </h3>

                        <Link
                          href="/projetos"
                          className="inline-block mt-6 bg-amber-500 hover:bg-amber-400 text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
                        >
                          Ver Projeto
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </motion.div>

        {/* CTA GLOBAL */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/projetos"
            className="inline-block border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
          >
            Ver Todos os Projetos
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
