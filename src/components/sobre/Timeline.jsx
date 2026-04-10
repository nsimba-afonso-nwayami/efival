"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const timeline = [
    {
      year: "2015",
      title: "Fundação da EFIVAL",
      desc: "Início das atividades com foco em pequenas obras e serviços técnicos especializados.",
    },
    {
      year: "2017",
      title: "Expansão de Serviços",
      desc: "Ampliação para projetos de construção civil e reabilitação de médio porte.",
    },
    {
      year: "2019",
      title: "Projetos de Grande Escala",
      desc: "Execução de obras industriais e comerciais com maior complexidade técnica.",
    },
    {
      year: "2022",
      title: "Consolidação no Mercado",
      desc: "Reconhecimento pela qualidade e cumprimento rigoroso de prazos.",
    },
    {
      year: "2025",
      title: "Inovação & Futuro",
      desc: "Adoção de novas tecnologias e expansão para soluções mais modernas.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">

      {/* DECOR */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-950">
            Nossa <span className="text-amber-600">Trajetória</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg">
            Uma jornada construída com dedicação, crescimento e excelência.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINHA CENTRAL */}
          <div className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full bg-amber-200 -translate-x-1/2" />

          {/* ITEMS */}
          <div className="space-y-16">

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >

                  {/* CARD */}
                  <div
                    className={`
                      group bg-white p-6 rounded-sm shadow-md hover:shadow-xl active:shadow-xl transition-all duration-500 w-full md:w-[45%]
                    `}
                  >
                    <span className="text-amber-500 font-bold text-sm tracking-widest">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold text-amber-950 mt-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* DOT */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full border-4 border-white shadow-md" />

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
