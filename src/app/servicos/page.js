import BannerServicos from "@/components/servicos/BannerServicos";
import ListaServicos from "@/components/servicos/ListaServicos";
import CatalogoServicos from "@/components/servicos/CatalogoServicos";
import CtaFinal from "@/components/servicos/CtaFinal";

// SEO otimizado para página Serviços
export const metadata = {
  title: "Serviços de Construção Civil em Luanda | EFIVAL Angola",

  description:
    "Conheça os serviços da EFIVAL em Angola: construção civil, obras residenciais e comerciais, reabilitação de edifícios, engenharia civil e gestão de projetos em Luanda e outras províncias.",

  keywords: [
    "serviços de construção civil Angola",
    "construção de casas Luanda",
    "obras comerciais Angola",
    "reabilitação de edifícios Luanda",
    "engenharia civil Angola",
    "gestão de obras Angola",
    "empreiteiro em Luanda",
    "empresa de construção Angola serviços",
    "construção residencial Angola",
    "EFIVAL serviços"
  ],

  openGraph: {
    title: "Serviços de Construção Civil | EFIVAL Angola",
    description:
      "Veja todos os serviços da EFIVAL: construção, engenharia civil, reabilitação e gestão de obras em Angola.",
    url: "https://seudominio.com/servicos",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "Serviços EFIVAL | Construção Civil em Angola",
    description:
      "Soluções completas em construção civil, obras e engenharia em Luanda e Angola."
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