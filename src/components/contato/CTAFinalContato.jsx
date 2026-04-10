"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAFinalContato() {
  return (
    <section className="relative bg-amber-950 py-24 overflow-hidden">

      {/* FUNDO PREMIUM */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,90,0.15),transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        {/* TITLE */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Vamos tirar o seu projeto do <span className="text-amber-400">papel</span>
        </motion.h2>

        {/* TEXT */}
        <motion.p
          className="text-amber-200 mt-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fale com a EFIVAL hoje mesmo e receba um orçamento personalizado.
          Estamos prontos para construir consigo com qualidade e rigor técnico.
        </motion.p>

        {/* BOTÕES */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

          {/* CTA PRINCIPAL */}
          <Link
            href="tel:+244900000000"
            className="bg-amber-500 hover:bg-amber-400 text-amber-950 px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95 text-center"
          >
            Ligar Agora
          </Link>

          {/* CTA SECUNDÁRIO */}
          <Link
            href="/projetos"
            className="border border-amber-400 text-amber-200 hover:bg-amber-900 px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all active:scale-95 text-center"
          >
            Ver Projetos
          </Link>

        </motion.div>

        {/* TRUST LINE */}
        <motion.p
          className="text-amber-200/70 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Resposta rápida • Orçamento gratuito • Atendimento profissional
        </motion.p>

      </div>
    </section>
  );
}
