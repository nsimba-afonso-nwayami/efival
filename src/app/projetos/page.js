import BannerServicos from "@/components/servicos/BannerServicos";

// SEO otimizado para página Projetos
export const metadata = {
  title: "Projetos de Construção Civil em Angola | Portfólio EFIVAL",

  description:
    "Veja os projetos realizados pela EFIVAL em Angola: obras residenciais, comerciais e reabilitação de edifícios em Luanda e outras províncias. Portfólio de construção civil com qualidade e experiência.",

  keywords: [
    "projetos de construção civil Angola",
    "obras realizadas Luanda",
    "portfólio construção Angola",
    "construtora em Luanda projetos",
    "obras residenciais Angola",
    "obras comerciais Angola",
    "reabilitação de edifícios Angola",
    "engenharia civil Angola projetos",
    "empreiteiro Angola obras",
    "EFIVAL projetos"
  ],

  openGraph: {
    title: "Projetos de Construção Civil | EFIVAL Angola",
    description:
      "Conheça os projetos realizados pela EFIVAL: construção, engenharia civil e reabilitação de edifícios em Angola.",
    url: "https://seudominio.com/projetos",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "Projetos EFIVAL | Construção Civil em Angola",
    description:
      "Portfólio de obras e projetos realizados pela EFIVAL em Angola."
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function Projetos() {
  return (
    <>
      <BannerServicos />
    </>
  );
}
