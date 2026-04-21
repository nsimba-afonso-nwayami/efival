import BannerServicos from "@/components/servicos/BannerServicos";
import ListaServicos from "@/components/servicos/ListaServicos";
import CatalogoServicos from "@/components/servicos/CatalogoServicos";
import CtaFinal from "@/components/servicos/CtaFinal";

// SEO otimizado para página Serviços
export const metadata = {
  title: "Serviços de Arquitetura e Design Interior em Angola | EFIVAL",

  description:
    "Conheça os serviços da EFIVAL em Angola: arquitetura residencial, design de interiores, remodelação de espaços e criação de ambientes modernos e funcionais em Luanda e outras províncias.",

  keywords: [
    "serviços de arquitetura Angola",
    "arquitetos em Luanda",
    "design de interiores Angola",
    "design interior Luanda",
    "projetos de arquitetura Angola",
    "casas modernas Angola",
    "remodelação de interiores Luanda",
    "estúdio de arquitetura Angola",
    "design de espaços Angola",
    "EFIVAL serviços arquitetura"
  ],

  openGraph: {
    title: "Serviços de Arquitetura e Design Interior | EFIVAL Angola",
    description:
      "Veja os serviços da EFIVAL: arquitetura residencial, design de interiores e remodelação de espaços em Angola.",
    url: "https://seudominio.com/servicos",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "Serviços EFIVAL | Arquitetura e Design Interior em Angola",
    description:
      "Soluções completas em arquitetura e design interior em Luanda e Angola."
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function Servicos() {
  return (
    <>
      <BannerServicos />
      <ListaServicos />
      <CatalogoServicos />
      <CtaFinal />
    </>
  );
}