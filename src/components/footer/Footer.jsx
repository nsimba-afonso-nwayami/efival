import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-slate-200 relative overflow-hidden">
      {/* Linha de luz superior - detalhe minimalista premium */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* COLUNA 1: IDENTIDADE DA MARCA (5 colunas) */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-4xl font-black text-amber-300 tracking-widest leading-none block group-hover:text-amber-400 transition-colors">
                EFIVAL
              </span>
              <span className="text-[11px] uppercase tracking-[0.45em] text-amber-600 block mt-2 font-medium">
                Arquitetura & Design Interior
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Criamos espaços que refletem identidade, sofisticação e funcionalidade. 
              A EFIVAL desenvolve projetos de arquitetura e design interior que unem estética contemporânea, 
              conforto e atenção aos detalhes, elevando a experiência de viver e trabalhar em Angola.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              {[
                { icon: "fa-facebook-f", href: "#" },
                { icon: "fa-instagram", href: "#" },
                { icon: "fa-linkedin-in", href: "#" },
                { icon: "fa-whatsapp", href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-amber-800/30 text-amber-500 hover:bg-amber-500 hover:text-amber-950 hover:border-amber-500 transition-all duration-500 shadow-sm"
                >
                  <i className={`fab ${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO RÁPIDA (3 colunas) */}
          <div className="md:col-span-3 md:pl-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-8">
              Explorar
            </h3>
            <ul className="space-y-4">
              {["Início", "Serviços", "Sobre", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Início" ? "/" : `/${item.toLowerCase()}`} 
                    className="text-sm text-slate-400 hover:text-amber-300 transition-all flex items-center group"
                  >
                    <span className="h-px w-0 bg-amber-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: CONTATO E LOCALIZAÇÃO (4 colunas) */}
          <div className="md:col-span-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-8">
              Contacto Direto
            </h3>
            <address className="not-italic space-y-6 text-sm">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 bg-amber-900/40 p-2 rounded-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-amber-950 transition-colors">
                  <i className="fas fa-map-marker-alt text-xs"></i>
                </div>
                <span className="text-slate-400 leading-relaxed">
                  Luanda, Angola<br />
                  <span className="text-xs text-slate-500 font-medium tracking-tight">Talatona, Via AL 15, Edifício Cristal</span>
                </span>
              </div>

              <a href="tel:+244900000000" className="flex items-center gap-4 group hover:text-amber-300 transition-colors">
                <div className="bg-amber-900/40 p-2 rounded-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-amber-950 transition-colors">
                  <i className="fas fa-phone text-xs"></i>
                </div>
                <span className="text-slate-400 group-hover:text-amber-300">+244 900 000 000</span>
              </a>

              <a href="mailto:contato@efival.ao" className="flex items-center gap-4 group hover:text-amber-300 transition-colors">
                <div className="bg-amber-900/40 p-2 rounded-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-amber-950 transition-colors">
                  <i className="fas fa-envelope text-xs"></i>
                </div>
                <span className="text-slate-400 group-hover:text-amber-300 break-all font-medium">contato@efival.ao</span>
              </a>
            </address>
          </div>
        </div>

        {/* BARRA INFERIOR FINAL */}
        <div className="mt-20 pt-8 border-t border-amber-900/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            &copy; {currentYear} EFIVAL GROUP — Luanda, Angola
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-default">
               <i className="fas fa-award text-amber-600"></i>
               <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Excelência Técnica Certificada</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}