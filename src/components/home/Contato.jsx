"use client";

import { motion } from "framer-motion";

export default function Contato() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">

      {/* DETALHE DECORATIVO - Consistente com a seção Serviços */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/60 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 leading-tight tracking-tight">
            Entre em <span className="text-amber-600">Contacto</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            Fale connosco e solicite o seu orçamento sem compromisso. Nossa equipa está pronta para viabilizar o seu projeto.
          </p>
        </motion.div>

        {/* CARDS DE CONTACTO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* TELEFONE */}
          <motion.div 
            className="group bg-white p-10 rounded-sm shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-500 text-center border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-amber-600 text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-phone"></i>
            </div>

            <h3 className="font-bold text-amber-950 text-xl">
              Telefone
            </h3>

            <a
              href="tel:+244900000000"
              className="block mt-4 text-slate-600 font-medium group-hover:text-amber-600 transition-colors"
            >
              +244 900 000 000
            </a>
          </motion.div>

          {/* EMAIL */}
          <motion.div 
            className="group bg-white p-10 rounded-sm shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-500 text-center border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-amber-600 text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-envelope"></i>
            </div>

            <h3 className="font-bold text-amber-950 text-xl">
              Email
            </h3>

            <a
              href="mailto:geral@efival.ao"
              className="block mt-4 text-slate-600 font-medium group-hover:text-amber-600 transition-colors"
            >
              geral@efival.ao
            </a>
          </motion.div>

          {/* LOCALIZAÇÃO */}
          <motion.div 
            className="group bg-white p-10 rounded-sm shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-500 text-center border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-amber-600 text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-map-marker-alt"></i>
            </div>

            <h3 className="font-bold text-amber-950 text-xl">
              Localização
            </h3>

            <p className="mt-4 text-slate-600 font-medium">
              Luanda, Angola
            </p>
          </motion.div>

        </div>

        {/* MAPA */}
        <motion.div 
          className="w-full h-112.5 rounded-sm overflow-hidden shadow-lg border-4 border-white"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.0202897456!2d13.062233!3d-8.838333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c6d0000000!2sLuanda%2C%20Angola!5e0!3m2!1spt-BR!2sao!4v1710000000000!5m2!1spt-BR!2sao"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
