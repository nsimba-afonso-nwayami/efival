"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASobre() {
  return (
    <section className="relative bg-amber-950 py-24 overflow-hidden">

      {/* FUNDO PREMIUM ANIMADO */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,90,0.12),transparent_70%)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* TITLE */}
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Vamos construir algo{" "}
          <span className="text-amber-400">duradouro</span> juntos
        </motion.h2>

        {/* TEXT */}
        <motion.p 
          className="text-amber-200 mt-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Na EFIVAL, transformamos ideias em projetos concretos com qualidade,
          rigor técnico e compromisso em cada detalhe.
        </motion.p>

        <motion.p 
          className="text-amber-300/80 mt-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Entre em contacto connosco e descubra como podemos ajudar no seu próximo projeto.
        </motion.p>

        {/* BOTÕES */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

          <Link
            href="/contato"
            className="bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95 text-center"
          >
            Falar Connosco
          </Link>

          <Link
            href="/projetos"
            className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-950 active:bg-amber-400 px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all text-center"
          >
            Ver Projetos
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
