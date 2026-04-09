import Link from "next/link";

// SEO Simples para página 404
export const metadata = {
  title: "Página não encontrada | EFIVAL",
  description: "A página que você procura não existe ou foi movida.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center bg-amber-950 relative overflow-hidden">

      {/* DECORAÇÃO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,90,0.15),transparent_70%)]"></div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">

        {/* ERROR CODE */}
        <h1 className="text-5xl md:text-7xl font-bold text-amber-400">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mt-6">
          Página não encontrada
        </h2>

        {/* TEXT */}
        <p className="text-amber-200 mt-6 text-lg leading-relaxed">
          A página que você procura não existe, foi removida ou o link está incorreto.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link
            href="/"
            className="bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
          >
            Voltar à Home
          </Link>

          <Link
            href="/projetos"
            className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-950 active:bg-amber-400 px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all active:scale-95"
          >
            Ver Projetos
          </Link>

        </div>

        {/* EXTRA HELP */}
        <p className="text-amber-300/70 mt-10 text-sm">
          Se acredita que isto é um erro, entre em contacto connosco.
        </p>

      </div>

    </section>
  );
}
