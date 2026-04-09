"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import servico1 from "@/assets/img/servico1.jpg";
import servico2 from "@/assets/img/servico2.jpg";
import servico3 from "@/assets/img/servico3.jpg";

export default function Servicos() {
  const listaServicos = [
    {
      title: "Construção Civil",
      desc: "Execução de obras residenciais, comerciais e industriais com elevados padrões de qualidade e segurança.",
      img: servico1,
      icon: "fa-building"
    },
    {
      title: "Reabilitação de Obras",
      desc: "Recuperação e modernização de estruturas com técnicas inovadoras e foco em durabilidade.",
      img: servico2,
      icon: "fa-tools"
    },
    {
      title: "Engenharia & Projetos",
      desc: "Planeamento e desenvolvimento de projetos técnicos com foco em eficiência, inovação e precisão.",
      img: servico3,
      icon: "fa-drafting-compass"
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-amber-950 leading-tight tracking-tight">
            Soluções completas em <span className="text-amber-600">Engenharia e Construção</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            Oferecemos serviços especializados com foco em qualidade técnica, 
            segurança normativa e inovação em cada projeto executado em Angola.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaServicos.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="group bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl active:shadow-2xl transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="relative h-64 overflow-hidden">
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

                <div
                  className="
                    absolute inset-0 bg-amber-950/20
                    opacity-0
                    group-hover:opacity-100
                    group-active:opacity-100
                    transition-opacity duration-500
                  "
                />
              </div>

              <div className="p-8 flex flex-col flex-1 relative">
                <div
                  className="
                    w-12 h-12 bg-white shadow-lg rounded-sm flex items-center justify-center
                    text-amber-600 text-xl absolute -top-6 left-8 z-20
                    transition-colors duration-300
                    group-hover:bg-amber-600 group-hover:text-white
                    group-active:bg-amber-600 group-active:text-white
                  "
                >
                  <i className={`fas ${item.icon}`}></i>
                </div>

                <h3 className="text-xl font-bold text-amber-950 mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-4 leading-relaxed flex-1">
                  {item.desc}
                </p>

                <Link
                  href="/contato"
                  className="
                    mt-8 inline-block bg-amber-500 hover:bg-amber-600
                    active:bg-amber-600
                    text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs
                    transition-all text-center active:scale-95
                  "
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA GLOBAL */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/servicos"
            className="inline-block border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
          >
            Ver Todos os Serviços
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
