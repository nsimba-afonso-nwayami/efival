"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CatalogoServicos() {
  const servicos = [
    {
      title: "Construção Civil",
      desc: "Execução completa de obras com rigor técnico e controlo de qualidade em todas as fases.",
      items: ["Fundações", "Estruturas", "Acabamentos", "Fiscalização"],
      nivel: "Alta Complexidade",
      prazo: "Médio / Longo prazo"
    },
    {
      title: "Reabilitação de Edifícios",
      desc: "Modernização estrutural e estética de edifícios com técnicas avançadas de engenharia.",
      items: ["Reforço estrutural", "Remodelação", "Correção de patologias", "Eficiência energética"],
      nivel: "Alta Precisão",
      prazo: "Médio prazo"
    },
    {
      title: "Engenharia & Projetos",
      desc: "Planeamento técnico detalhado para garantir eficiência, segurança e otimização de custos.",
      items: ["Projetos estruturais", "Cálculo técnico", "Consultoria", "Planeamento"],
      nivel: "Alta Especialização",
      prazo: "Curto / Médio prazo"
    },
    {
      title: "Infraestruturas Urbanas",
      desc: "Desenvolvimento de soluções urbanas modernas para mobilidade e saneamento.",
      items: ["Vias", "Drenagem", "Saneamento", "Urbanismo"],
      nivel: "Grande Escala",
      prazo: "Longo prazo"
    },
  ];

  return (
    <section className="bg-slate-50 py-28 relative overflow-hidden">

      {/* background premium layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#C9A85A_1px,transparent_0)] bg-size-[24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950">
            Catálogo Técnico de <span className="text-amber-600">Serviços</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg">
            Visão detalhada das nossas áreas de atuação com foco em capacidade técnica,
            escala de execução e especialização.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {servicos.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-white border border-slate-100 p-8 relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >

              {/* glow hover */}
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-amber-950 relative">
                {item.title}
              </h3>

              <p className="text-slate-600 mt-4 leading-relaxed relative">
                {item.desc}
              </p>

              {/* TAGS TECH */}
              <div className="flex flex-wrap gap-2 mt-6 relative">
                {item.items.map((el, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-sm"
                  >
                    {el}
                  </span>
                ))}
              </div>

              {/* INFO BAR */}
              <div className="mt-6 flex flex-col gap-1 text-sm text-slate-500 relative">
                <p>
                  <span className="text-amber-600 font-semibold">Nível:</span>{" "}
                  {item.nivel}
                </p>
                <p>
                  <span className="text-amber-600 font-semibold">Prazo:</span>{" "}
                  {item.prazo}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contato"
                className="inline-block mt-8 text-amber-900 font-bold uppercase text-xs tracking-widest hover:text-amber-600 transition"
              >
                Solicitar análise <i className="fas fa-arrow-right"></i>
              </Link>

              {/* decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-500" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
