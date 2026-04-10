"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaFinal() {
  return (
    <section className="relative py-28 bg-amber-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#C9A85A,transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Vamos transformar o seu <span className="text-amber-400">projeto em realidade</span>
          </h2>

          <p className="text-amber-100 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Fale com a nossa equipa e receba uma análise técnica detalhada do seu projeto.
            Trabalhamos com rigor, segurança e excelência em cada detalhe.
          </p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          {/* PRIMARY CTA */}
          <Link
            href="/contato"
            className="bg-amber-500 hover:bg-amber-400 text-amber-950 px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95"
          >
            Solicitar Orçamento
          </Link>

          {/* SECONDARY CTA */}
          <Link
            href="/servicos"
            className="border border-amber-400 text-amber-200 hover:bg-amber-900 px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
          >
            Ver Serviços
          </Link>

        </motion.div>

        {/* TRUST LINE */}
        <motion.p
          className="text-amber-200/70 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Resposta rápida • Orçamento gratuito • Atendimento técnico especializado
        </motion.p>

      </div>
    </section>
  );
}
