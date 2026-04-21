"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import sobre2 from "@/assets/img/sobre2.jpg";

export default function Sobre() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 leading-tight tracking-tight">
            Projetamos espaços que combinam estética, conforto e identidade
          </h2>

          <div className="space-y-6 text-slate-600 mt-8 leading-relaxed">
            <p className="text-lg">
              A EFIVAL é um estúdio de arquitetura e design interior dedicado a criar
              ambientes sofisticados, funcionais e alinhados ao estilo de vida de cada cliente.
              Desenvolvemos projetos personalizados com foco na harmonia entre forma, luz e materiais.
            </p>

            <p>
              Do conceito ao resultado final, cuidamos de cada detalhe para transformar ideias
              em espaços únicos. Acreditamos que um bom projeto vai além da estética — ele melhora
              a forma como se vive, trabalha e se sente dentro de um ambiente.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/sobre"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95"
            >
              Saber Mais
            </Link>

            <Link
              href="/projetos"
              className="border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
            >
              Ver Projetos
            </Link>
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

          <div className="relative overflow-hidden rounded-sm shadow-xl">
            <Image
              src={sobre2}
              alt="Sobre EFIVAL construção civil"
              className="
                object-cover w-full h-112.5
                transition-transform duration-1000
                group-hover:scale-105
                group-active:scale-105
              "
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
