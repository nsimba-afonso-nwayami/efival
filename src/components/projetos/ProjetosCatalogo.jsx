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

export default function ProjetosCatalogo() {
  const projetos = [
    {
      title: "Residência Contemporânea",
      category: "Arquitetura Residencial",
      location: "Luanda, Angola",
      img: projeto1,
    },
    {
      title: "Escritório Corporativo Moderno",
      category: "Design de Interiores",
      location: "Talatona, Luanda",
      img: projeto2,
    },
    {
      title: "Apartamento Urbano",
      category: "Interiores Residenciais",
      location: "Viana, Luanda",
      img: projeto3,
    },
    {
      title: "Espaço Comercial Premium",
      category: "Arquitetura Comercial",
      location: "Bengo, Angola",
      img: projeto4,
    },
  ];

  return (
    <section className="bg-white py-28 relative overflow-hidden">

      {/* subtle background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#C9A85A_1px,transparent_0)] bg-size-[26px_26px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950">
            Portfólio de <span className="text-amber-600">Projetos</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg">
            Uma seleção de projetos de arquitetura e design interior desenvolvidos com foco em estética, funcionalidade e atenção ao detalhe.
          </p>
        </motion.div>

        {/* SWIPER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            grabCursor={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >

            {projetos.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative overflow-hidden rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500">

                  {/* IMAGE */}
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="
                        object-cover w-full h-full
                        transition-transform duration-1000
                        group-hover:scale-105
                        group-active:scale-105
                      "
                    />

                    {/* overlay mais técnico */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 p-6 w-full">

                      <span className="text-amber-300 text-xs uppercase tracking-widest">
                        {item.category}
                      </span>

                      <h3 className="text-white text-xl font-bold mt-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-slate-200 text-sm mt-1">
                        {item.location}
                      </p>

                      {/* CTA hover style mais discreto */}
                      <div className="mt-5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500">
                        <Link
                          href="/projetos"
                          className="inline-block bg-amber-500 hover:bg-amber-400 text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
                        >
                          Ver Detalhes
                        </Link>
                      </div>

                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/projetos"
            className="inline-block border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
          >
            Explorar Todos os Projetos
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
