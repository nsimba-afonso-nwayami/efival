"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import servico1 from "@/assets/img/servico1.jpg";
import servico2 from "@/assets/img/servico2.jpg";
import servico3 from "@/assets/img/servico3.jpg";

export default function ListaServicos() {
  const servicos = [
    {
      title: "Arquitetura Residencial",
      subtitle: "Casas modernas e espaços personalizados",
      desc: "Desenvolvemos projetos residenciais que combinam funcionalidade, estética e conforto, criando espaços adaptados ao estilo de vida de cada cliente.",
      features: [
        "Projetos de casas modernas",
        "Estudos de espaço e layout",
        "Integração com o ambiente",
        "Soluções personalizadas"
      ],
      img: servico1,
    },
    {
      title: "Design de Interiores",
      subtitle: "Ambientes sofisticados e funcionais",
      desc: "Criamos interiores únicos com foco em harmonia, luz, materiais e identidade, transformando espaços em experiências visuais e funcionais.",
      features: [
        "Decoração e composição de espaços",
        "Seleção de materiais e cores",
        "Iluminação e ambiente",
        "Personalização total"
      ],
      img: servico2,
    },
    {
      title: "Projetos Arquitetónicos",
      subtitle: "Conceção e desenvolvimento de espaços",
      desc: "Desenvolvemos projetos completos de arquitetura, desde o conceito inicial até à definição detalhada do espaço final.",
      features: [
        "Conceito arquitetónico",
        "Plantas e modelação",
        "Estudos de viabilidade espacial",
        "Coordenação de projeto"
      ],
      img: servico3,
    },
  ];

  return (
    <section className="bg-white py-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 leading-tight">
            Serviços profissionais de{" "}
            <span className="text-amber-600">Arquitetura e Design Interior</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            Desenvolvemos soluções completas de design de espaços, combinando estética, funcionalidade e conforto em projetos residenciais e comerciais.
          </p>
        </motion.div>

        {/* LISTA DE SERVIÇOS (CATÁLOGO) */}
        <div className="space-y-28">

          {servicos.map((item, index) => {
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
                    className="relative w-full h-105 object-cover rounded-sm shadow-xl"
                  />
                </div>

                {/* TEXTO */}
                <div>

                  <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">
                    Serviço Especializado
                  </span>

                  <h3 className="text-3xl font-bold text-amber-950 mt-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-2 font-medium">
                    {item.subtitle}
                  </p>

                  <p className="text-slate-600 mt-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* FEATURES */}
                  <ul className="mt-6 space-y-2 text-slate-600">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contato"
                    className="inline-block mt-8 bg-amber-500 hover:bg-amber-400 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95"
                  >
                    Solicitar Orçamento
                  </Link>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* CTA FINAL */}
        <motion.div
          className="text-center mt-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-amber-950">
            Precisa de um serviço personalizado?
          </h3>

          <p className="text-slate-600 mt-3">
            Fale connosco e desenvolvemos uma solução à medida do seu projeto.
          </p>

          <Link
            href="/contato"
            className="inline-block mt-6 border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-widest text-xs transition-all"
          >
            Falar Connosco
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
