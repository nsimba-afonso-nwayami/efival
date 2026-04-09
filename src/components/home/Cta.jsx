"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section className="relative bg-amber-950 py-24 overflow-hidden">

      {/* FUNDO DECORATIVO - Animado com pulsação leve */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,90,0.15),transparent_70%)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pronto para iniciar o seu{" "}
          <span className="text-amber-400">projeto?</span>
        </motion.h2>

        <motion.p 
          className="text-amber-200 mt-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fale connosco hoje mesmo e receba um orçamento personalizado
          para a sua obra com total confiança e profissionalismo.
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
            Solicitar Orçamento
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
