"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import projeto1 from "@/assets/img/projeto1.jpg";
import projeto2 from "@/assets/img/projeto2.jpg";
import projeto3 from "@/assets/img/projeto3.jpg";

export default function ProjetosDestaque() {
  const projetos = [
    {
      title: "Edifício Residencial Moderno",
      location: "Luanda, Angola",
      desc: "Projeto residencial de média-alta densidade com foco em eficiência estrutural, conforto térmico e otimização de espaços habitacionais.",
      metrics: [
        { label: "Área construída", value: "8.500 m²" },
        { label: "Duração", value: "14 meses" },
        { label: "Tipologia", value: "Residencial" },
      ],
      img: projeto1,
    },
    {
      title: "Reabilitação de Complexo Empresarial",
      location: "Talatona, Luanda",
      desc: "Intervenção completa de reabilitação estrutural e estética em edifício corporativo, modernizando infraestruturas e sistemas técnicos.",
      metrics: [
        { label: "Área intervencionada", value: "5.200 m²" },
        { label: "Duração", value: "9 meses" },
        { label: "Tipologia", value: "Comercial" },
      ],
      img: projeto2,
    },
    {
      title: "Infraestrutura Industrial",
      location: "Viana, Angola",
      desc: "Construção de unidade industrial com soluções estruturais robustas e preparação para alta carga operacional.",
      metrics: [
        { label: "Área construída", value: "12.000 m²" },
        { label: "Duração", value: "18 meses" },
        { label: "Tipologia", value: "Industrial" },
      ],
      img: projeto3,
    },
  ];

  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950">
            Projetos em <span className="text-amber-600">Destaque</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg">
            Casos reais de execução com detalhe técnico, escala e rigor de engenharia.
          </p>
        </motion.div>

        {/* CASE STUDIES */}
        <div className="space-y-28">

          {projetos.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >

                {/* IMAGEM */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-amber-500/10 blur-2xl rounded-sm group-hover:bg-amber-500/20 transition-all" />

                  <Image
                    src={item.img}
                    alt={item.title}
                    className="relative w-full h-105 object-cover transition-transform duration-1000 group-hover:scale-105 group-active:scale-105 shadow-xl rounded-sm"
                  />
                </div>

                {/* TEXTO */}
                <div>

                  <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">
                    Case Study
                  </span>

                  <h3 className="text-3xl font-bold text-amber-950 mt-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {item.location}
                  </p>

                  <p className="text-slate-600 mt-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* MÉTRICAS */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {item.metrics.map((m, i) => (
                      <div key={i} className="border-l-2 border-amber-500 pl-3">
                        <p className="text-xs text-slate-500">{m.label}</p>
                        <p className="text-sm font-bold text-amber-950">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/projetos"
                    className="inline-block mt-10 bg-amber-500 hover:bg-amber-400 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95"
                  >
                    Ver Projeto Completo
                  </Link>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
