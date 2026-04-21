import BannerProjetos from "@/components/projetos/BannerProjetos";
import ProjetosCatalogo from "@/components/projetos/ProjetosCatalogo";
import ProjetosDestaque from "@/components/projetos/ProjetosDestaque";
import ProjetosFiltro from "@/components/projetos/ProjetosFiltro";
import CtaProjetos from "@/components/projetos/CtaProjetos";

// SEO otimizado para página Projetos
export const metadata = {
  title: "Projetos de Arquitetura e Design Interior em Angola | EFIVAL",

  description:
    "Conheça o portfólio da EFIVAL em Angola: projetos de arquitetura, design interior e remodelação de espaços residenciais e comerciais em Luanda e outras províncias.",

  keywords: [
    "projetos de arquitetura Angola",
    "portfólio arquitetura Luanda",
    "design de interiores Angola projetos",
    "casas modernas Angola projetos",
    "projetos residenciais Luanda",
    "interiores comerciais Angola",
    "remodelação de interiores Angola",
    "estúdio de arquitetura Angola portfólio",
    "design de espaços Angola",
    "EFIVAL projetos arquitetura"
  ],

  openGraph: {
    title: "Projetos de Arquitetura e Design Interior | EFIVAL Angola",
    description:
      "Conheça o portfólio da EFIVAL: projetos de arquitetura e design interior em Angola, com foco em espaços modernos e funcionais.",
    url: "https://seudominio.com/projetos",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "Projetos EFIVAL | Arquitetura e Design Interior em Angola",
    description:
      "Portfólio de arquitetura e design interior da EFIVAL em Angola."
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function Projetos() {
  return (
    <>
      <BannerProjetos />
      <ProjetosCatalogo />
      <ProjetosDestaque />
      <ProjetosFiltro />
      <CtaProjetos />
    </>
  );
}
