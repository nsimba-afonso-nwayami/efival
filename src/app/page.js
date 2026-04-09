import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import Projetos from "@/components/home/Projetos";
import Diferenciais from "@/components/home/Diferenciais";
import Contato from "@/components/home/Contato";
import Cta from "@/components/home/Cta";

// Configuração de Metadata (SEO Principal)
export const metadata = {
  title: "EFIVAL | Construção Civil, Obras e Engenharia em Luanda",

  description:
    "A EFIVAL é uma empresa de construção civil em Luanda especializada em obras residenciais e comerciais, reabilitação de edifícios, engenharia civil e gestão de projetos em Angola.",

  keywords: [
    "Construção civil Angola",
    "Empresa de construção Luanda",
    "Obras residenciais Angola",
    "Obras comerciais Luanda",
    "Reabilitação de edifícios Angola",
    "Engenharia civil Luanda",
    "Empreiteiro Angola",
    "Gestão de obras Luanda",
    "Projetos de construção Angola",
    "EFIVAL"
  ],
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
