import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import Projetos from "@/components/home/Projetos";
import Diferenciais from "@/components/home/Diferenciais";
import Contato from "@/components/home/Contato";
import Cta from "@/components/home/Cta";

// SEO Principal otimizado
export const metadata = {
  title: "EFIVAL | Construção Civil em Luanda, Obras e Engenharia em Angola",

  description:
    "A EFIVAL é uma empresa de construção civil em Luanda, Angola, especializada em obras residenciais e comerciais, reabilitação de edifícios, engenharia civil e gestão de projetos com qualidade e segurança.",

  keywords: [
    "construção civil Angola",
    "construtora em Luanda",
    "empresa de construção Angola",
    "obras residenciais Angola",
    "obras comerciais Luanda",
    "engenharia civil Angola",
    "reabilitação de edifícios Luanda",
    "empreiteiro em Angola",
    "gestão de obras Angola",
    "construção de edifícios Angola",
    "EFIVAL"
  ],

  openGraph: {
    title: "EFIVAL | Construção Civil em Luanda, Angola",
    description:
      "Empresa de construção civil em Angola especializada em obras, engenharia civil e gestão de projetos com qualidade e confiança.",
    url: "https://seudominio.com",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "EFIVAL | Construção Civil em Luanda",
    description:
      "Especialistas em construção civil, obras residenciais e comerciais em Angola."
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <Diferenciais />
      <Contato />
      <Cta />
    </>
  );
}
