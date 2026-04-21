import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import Projetos from "@/components/home/Projetos";
import Diferenciais from "@/components/home/Diferenciais";
import Contato from "@/components/home/Contato";
import Cta from "@/components/home/Cta";

// SEO Principal otimizado
export const metadata = {
  title: "EFIVAL | Arquitetura e Design Interior em Luanda, Angola",

  description:
    "A EFIVAL é um estúdio de arquitetura e design interior em Luanda, Angola, especializado na criação de espaços residenciais e comerciais modernos, funcionais e personalizados.",

  keywords: [
    "arquitetura Angola",
    "arquitetos em Luanda",
    "design de interiores Angola",
    "design interior Luanda",
    "estúdio de arquitetura Angola",
    "projetos de arquitetura Angola",
    "interior design Luanda",
    "casas modernas Angola",
    "projetos residenciais Luanda",
    "remodelação de interiores Angola",
    "design de espaços Angola",
    "EFIVAL arquitetura"
  ],

  openGraph: {
    title: "EFIVAL | Arquitetura e Design Interior em Luanda, Angola",
    description:
      "Estúdio de arquitetura e design interior em Angola, criando espaços modernos, funcionais e personalizados para residências e negócios.",
    url: "https://seudominio.com",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "EFIVAL | Arquitetura e Design Interior em Luanda",
    description:
      "Criamos espaços modernos e personalizados em arquitetura e design interior em Angola."
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
