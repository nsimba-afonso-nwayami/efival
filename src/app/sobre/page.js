import Link from "next/link";

// SEO otimizado para página Sobre
export const metadata = {
  title: "Sobre a EFIVAL | Empresa de Construção Civil em Angola",
  description:
    "Conheça a EFIVAL, empresa de construção civil em Angola especializada em obras residenciais, comerciais e reabilitação de edifícios em Luanda e outras províncias.",
  keywords: [
    "EFIVAL",
    "empresa de construção civil Angola",
    "construtora em Luanda",
    "sobre empresa de construção Angola",
    "engenharia civil Angola",
    "empreiteiro em Luanda",
    "construção de edifícios Angola",
    "reabilitação de imóveis Angola",
    "gestão de obras Angola",
    "construção residencial e comercial Angola"
  ],
  openGraph: {
    title: "Sobre a EFIVAL | Construção Civil em Angola",
    description:
      "Conheça a EFIVAL, especialista em construção civil, engenharia e gestão de obras em Angola.",
    url: "https://seudominio.com/sobre",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a EFIVAL | Construção Civil em Angola",
    description:
      "Empresa de construção civil em Angola especializada em obras residenciais e comerciais."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Sobre() {
  return (
    <section>
    </section>
  );
}