"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { contatoSchema } from "@/validations/contatoSchema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contatoSchema),
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Enviando mensagem...");

    try {
      const { nome, email, telefone, assunto, mensagem } = data;

      const texto = `
Olá! Tenho interesse nos serviços da EFIVAL.

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Assunto: ${assunto}

Mensagem:
${mensagem}
      `;

      const mensagemFormatada = encodeURIComponent(texto);
      const numero = "244924034804";

      const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;

      await new Promise((resolve) => setTimeout(resolve, 1500));

      window.open(url, "_blank");

      toast.success("Redirecionando para o WhatsApp...", { id: toastId });

      reset();
    } catch (err) {
      toast.error("Erro ao abrir WhatsApp", { id: toastId });
    }
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950">
            Envie a sua <span className="text-amber-600">mensagem</span>
          </h2>

          <p className="text-slate-600 mt-5 text-lg">
            Preencha o formulário e a nossa equipa entrará em contacto consigo o mais rápido possível.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-10 border border-slate-200 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* NOME */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-amber-950 mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="O seu nome"
              {...register("nome")}
              className="px-4 py-3 border border-slate-200 focus:border-amber-500 outline-none transition-all"
            />
            {errors.nome && (
              <span className="text-red-500 text-sm mt-1">
                {errors.nome.message}
              </span>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-amber-950 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              {...register("email")}
              className="px-4 py-3 border border-slate-200 focus:border-amber-500 outline-none transition-all"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* TELEFONE */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-amber-950 mb-2">
              Telefone
            </label>
            <input
              type="tel"
              placeholder="+244 9XX XXX XXX"
              {...register("telefone")}
              className="px-4 py-3 border border-slate-200 focus:border-amber-500 outline-none transition-all"
            />
            {errors.telefone && (
              <span className="text-red-500 text-sm mt-1">
                {errors.telefone.message}
              </span>
            )}
          </div>

          {/* ASSUNTO */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-amber-950 mb-2">
              Assunto
            </label>
            <input
              type="text"
              placeholder="Ex: Pedido de orçamento"
              {...register("assunto")}
              className="px-4 py-3 border border-slate-200 focus:border-amber-500 outline-none transition-all"
            />
            {errors.assunto && (
              <span className="text-red-500 text-sm mt-1">
                {errors.assunto.message}
              </span>
            )}
          </div>

          {/* MENSAGEM */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-amber-950 mb-2">
              Mensagem
            </label>
            <textarea
              rows="6"
              placeholder="Escreva a sua mensagem..."
              {...register("mensagem")}
              className="px-4 py-3 border border-slate-200 focus:border-amber-500 outline-none transition-all resize-none"
            />
            {errors.mensagem && (
              <span className="text-red-500 text-sm mt-1">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          {/* BOTÃO */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-amber-500 cursor-pointer hover:bg-amber-400 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95"
            >
              Enviar Mensagem
            </button>
          </div>

        </motion.form>
      </div>
    </section>
  );
}
