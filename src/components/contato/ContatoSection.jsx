"use client";

import { motion } from "framer-motion";

export default function ContatoSection() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950">
            Entre em <span className="text-amber-600">Contacto</span>
          </h2>

          <p className="text-slate-600 mt-5 text-lg">
            Estamos disponíveis para responder ao seu projeto, orçamento ou parceria.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CARD 1 - Telefone */}
          <motion.div
            className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all p-8 text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-amber-500 text-white rounded-sm group-hover:scale-110 transition-transform">
              <i className="fas fa-phone text-lg"></i>
            </div>

            <h3 className="text-lg font-bold text-amber-950">Telefone</h3>

            <a
              href="tel:+244900000000"
              className="text-slate-600 mt-3 block hover:text-amber-600 transition-colors"
            >
              +244 900 000 000
            </a>
          </motion.div>

          {/* CARD 2 - Email */}
          <motion.div
            className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all p-8 text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-amber-500 text-white rounded-sm group-hover:scale-110 transition-transform">
              <i className="fas fa-envelope text-lg"></i>
            </div>

            <h3 className="text-lg font-bold text-amber-950">Email</h3>

            <a
              href="mailto:geral@efival.co.ao"
              className="text-slate-600 mt-3 block hover:text-amber-600 transition-colors"
            >
              geral@efival.co.ao
            </a>
          </motion.div>

          {/* CARD 3 - Localização */}
          <motion.div
            className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all p-8 text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-amber-500 text-white rounded-sm group-hover:scale-110 transition-transform">
              <i className="fas fa-map-marker-alt text-lg"></i>
            </div>

            <h3 className="text-lg font-bold text-amber-950">Localização</h3>

            <p className="text-slate-600 mt-3">
              Luanda, Angola
            </p>
          </motion.div>

        </div>

        {/* MAPA */}
        <motion.div
          className="mt-16 overflow-hidden shadow-xl border border-slate-200"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105291.77111161467!2d13.20170168145374!3d-8.853353711556109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda!5e1!3m2!1spt-PT!2sao!4v1775821804479!5m2!1spt-PT!2sao"
            className="w-full h-105"
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />

        </motion.div>

      </div>
    </section>
  );
}
