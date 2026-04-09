"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Diferenciais() {

  const diferenciais = [
    {
      title: "Qualidade Garantida",
      desc: "Utilizamos materiais certificados e seguimos rigorosamente os padrões técnicos exigidos.",
      icon: "fa-shield-alt",
    },
    {
      title: "Equipa Especializada",
      desc: "Profissionais qualificados com experiência comprovada em construção e engenharia.",
      icon: "fa-user-cog",
    },
    {
      title: "Cumprimento de Prazos",
      desc: "Planeamento eficiente para garantir entregas dentro dos prazos estabelecidos.",
      icon: "fa-clock",
    },
    {
      title: "Tecnologia & Inovação",
      desc: "Aplicamos soluções modernas e técnicas avançadas em todos os projetos.",
      icon: "fa-microchip",
    },
  ];

  return (
    <section className="bg-amber-950 py-24 relative overflow-hidden">

      {/* DETALHE DECORATIVO - Opacidade sutil para profundidade */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-amber-500/5 skew-x-12 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Por que escolher a <span className="text-amber-500">EFIVAL</span>?
          </h2>

          <p className="text-slate-300 mt-6 text-lg leading-relaxed">
            Compromisso, qualidade e excelência em cada detalhe do seu projeto.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {diferenciais.map((item, idx) => (
            <motion.div
              key={idx}
              className="
                group bg-white/5 backdrop-blur-sm border border-white/10
                rounded-sm p-8 text-center
                hover:bg-amber-500 transition-all duration-500
                active:bg-amber-500
              "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* ICON */}
              <div
                className="
                  text-amber-500 text-3xl mb-6
                  transition-colors duration-300
                  group-hover:text-white
                  group-active:text-white
                "
              >
                <i className={`fas ${item.icon}`}></i>
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-lg font-bold text-white
                  transition-colors duration-300
                  group-hover:text-white
                  group-active:text-white
                "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  text-slate-300 mt-4 text-sm leading-relaxed
                  transition-colors duration-300
                  group-hover:text-white/90
                  group-active:text-white/90
                "
              >
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contato"
            className="inline-block bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95"
          >
            Solicitar Orçamento
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
