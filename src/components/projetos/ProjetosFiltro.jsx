"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import projeto1 from "@/assets/img/projeto1.jpg";
import projeto2 from "@/assets/img/projeto2.jpg";
import projeto3 from "@/assets/img/projeto3.jpg";
import projeto4 from "@/assets/img/projeto4.jpg";

export default function ProjetosFiltro() {
  const [filter, setFilter] = useState("Todos");

  const categorias = [
    "Todos",
    "Construção Civil",
    "Reabilitação",
    "Engenharia",
    "Infraestrutura",
  ];

  const projetos = [
    {
      title: "Edifício Residencial Moderno",
      category: "Construção Civil",
      location: "Luanda",
      img: projeto1,
    },
    {
      title: "Reabilitação de Escritórios",
      category: "Reabilitação",
      location: "Talatona",
      img: projeto2,
    },
    {
      title: "Infraestrutura Industrial",
      category: "Engenharia",
      location: "Viana",
      img: projeto3,
    },
    {
      title: "Complexo Habitacional",
      category: "Infraestrutura",
      location: "Bengo",
      img: projeto4,
    },
  ];

  const filteredProjects =
    filter === "Todos"
      ? projetos
      : projetos.filter((p) => p.category === filter);

  return (
    <section className="bg-slate-50 py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-amber-950">
            Explore os <span className="text-amber-600">Projetos</span>
          </h2>

          <p className="text-slate-600 mt-5 text-lg">
            Filtre os nossos projetos por categoria e conheça o nosso portfólio completo de obras.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-5 py-2 text-xs uppercase tracking-widest font-bold border transition-all duration-300
                ${
                  filter === cat
                    ? "bg-amber-500 text-white border-amber-500"
                    : "border-slate-300 text-slate-600 hover:border-amber-500 hover:text-amber-600"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <AnimatePresence mode="wait">
            {filteredProjects.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">
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

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 p-5 w-full">

                    <span className="text-amber-300 text-xs uppercase tracking-widest">
                      {item.category}
                    </span>

                    <h3 className="text-white text-lg font-bold mt-1">
                      {item.title}
                    </h3>

                    <p className="text-slate-200 text-sm">
                      {item.location}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
