"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sobre2 from "@/assets/img/sobre2.jpg";

export default function InstitucionalSobre() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-600 uppercase text-xs tracking-widest font-bold">
            Quem Somos
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mt-4 leading-tight">
            Criamos espaços com visão contemporânea e identidade
          </h2>

          <div className="space-y-6 text-slate-600 mt-8 leading-relaxed">
            <p className="text-lg">
              A EFIVAL é um estúdio de arquitetura e design interior sediado em Angola,
              dedicado à criação de espaços residenciais e comerciais que combinam estética, funcionalidade e conforto.
            </p>

            <p>
              Desenvolvemos projetos completos, desde o conceito até ao design final, com uma abordagem centrada no detalhe,
              na harmonia dos espaços e na experiência de quem os utiliza.
            </p>

            <p>
              Trabalhamos com criatividade, rigor e sensibilidade estética para transformar ideias em ambientes únicos e personalizados.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div>
              <h3 className="text-2xl font-bold text-amber-600">+50</h3>
              <p className="text-sm text-slate-500">Projetos</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-600">+10</h3>
              <p className="text-sm text-slate-500">Anos</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-600">100%</h3>
              <p className="text-sm text-slate-500">Qualidade</p>
            </div>

          </div>

        </motion.div>

        {/* IMAGEM */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          {/* GLOW */}
          <div
            className="
              absolute -inset-2 bg-amber-500/5 rounded-sm blur-2xl
              transition-all duration-500
              group-hover:bg-amber-500/15
              group-active:bg-amber-500/15
            "
          />

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-sm shadow-xl">
            <Image
              src={sobre2}
              alt="Equipe EFIVAL em projeto de construção"
              className="
                object-cover w-full h-112.5
                transition-transform duration-1000
                group-hover:scale-105
                group-active:scale-105
              "
            />
          </div>

          {/* BADGE (extra profissional) */}
          <div className="absolute bottom-6 left-6 bg-white px-6 py-4 shadow-lg rounded-sm">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Engenharia & Construção
            </p>
            <p className="text-amber-600 font-bold text-lg">
              Excelência Comprovada
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}
