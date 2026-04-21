import BannerSobre from "@/components/sobre/BannerSobre";
import InstitucionalSobre from "@/components/sobre/InstitucionalSobre";
import MissaoVisaoValores from "@/components/sobre/MissaoVisaoValores";
import Timeline from "@/components/sobre/Timeline";
import CTASobre from "@/components/sobre/CTASobre";

// SEO otimizado para página Sobre
export const metadata = {
  title: "Sobre a EFIVAL | Arquitetura e Design Interior em Angola",

  description:
    "Conheça a EFIVAL, um estúdio de arquitetura e design interior em Angola especializado na criação de espaços residenciais e comerciais modernos, funcionais e personalizados.",

  keywords: [
    "EFIVAL",
    "arquitetura Angola",
    "arquitetos em Luanda",
    "design de interiores Angola",
    "estúdio de arquitetura Angola",
    "sobre arquitetura Angola",
    "design interior Luanda",
    "projetos de arquitetura Angola",
    "casas modernas Angola",
    "remodelação de interiores Angola",
    "design de espaços Angola"
  ],

  openGraph: {
    title: "Sobre a EFIVAL | Arquitetura e Design Interior em Angola",
    description:
      "Conheça a EFIVAL, estúdio de arquitetura e design interior em Angola focado em criar espaços modernos, funcionais e personalizados.",
    url: "https://seudominio.com/sobre",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobre a EFIVAL | Arquitetura e Design Interior em Angola",
    description:
      "Estúdio de arquitetura e design interior em Angola especializado em espaços modernos e personalizados."
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function Sobre() {
  return (
    <>
      <BannerSobre />
      <InstitucionalSobre />
      <MissaoVisaoValores />
      <Timeline />
      <CTASobre />
    </>
  );
}