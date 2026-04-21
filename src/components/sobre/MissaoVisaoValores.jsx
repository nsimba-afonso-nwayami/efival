"use client";

import { motion } from "framer-motion";

export default function MissaoVisaoValores() {
  const items = [
    {
      title: "Missão",
      icon: "fa-bullseye",
      desc: "Criar espaços de arquitetura e design interior que unem estética, funcionalidade e identidade, melhorando a forma como as pessoas vivem e interagem com os ambientes.",
    },
    {
      title: "Visão",
      icon: "fa-eye",
      desc: "Ser um estúdio de referência em arquitetura e design interior em Angola, reconhecido pela criatividade, sofisticação e qualidade dos projetos desenvolvidos.",
    },
    {
      title: "Valores",
      icon: "fa-gem",
      list: [
        "Excelência no design",
        "Atenção ao detalhe",
        "Criatividade e inovação",
        "Funcionalidade e estética",
        "Compromisso com o cliente",
      ],
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">

      {/* DECOR */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/60 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-amber-950">
            Nossos <span className="text-amber-600">Princípios</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg">
            A base que sustenta cada projeto que desenvolvemos.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="group bg-slate-50 p-8 rounded-sm shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >

              {/* ICON */}
              <div className="text-amber-500 text-3xl mb-6 group-hover:scale-110 group-active:scale-110 transition-transform">
                <i className={`fas ${item.icon}`}></i>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-amber-950">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              {item.desc && (
                <p className="text-slate-600 mt-4 leading-relaxed">
                  {item.desc}
                </p>
              )}

              {/* VALUES LIST */}
              {item.list && (
                <ul className="mt-6 space-y-2 text-slate-600 text-sm">
                  {item.list.map((val, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {val}
                    </li>
                  ))}
                </ul>
              )}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
