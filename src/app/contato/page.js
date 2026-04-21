import BannerContato from "@/components/contato/BannerContato";
import ContatoSection from "@/components/contato/ContatoSection";
import ContactForm from "@/components/contato/ContactForm";
import CTAFinalContato from "@/components/contato/CTAFinalContato";

// SEO otimizado para página Contato
export const metadata = {
  title: "Contato EFIVAL | Arquitetura e Design Interior em Luanda",

  description:
    "Entre em contato com a EFIVAL para solicitar orçamento de projetos de arquitetura e design interior em Angola. Criamos espaços residenciais e comerciais modernos e personalizados em Luanda e outras províncias.",

  keywords: [
    "contacto EFIVAL",
    "arquitetos em Luanda contacto",
    "design de interiores Angola contacto",
    "orçamento arquitetura Angola",
    "estúdio de arquitetura Luanda contacto",
    "projetos de arquitetura Angola orçamento",
    "design interior Luanda contacto",
    "remodelação de interiores Angola contacto",
    "casas modernas Angola contacto",
    "EFIVAL contacto"
  ],

  openGraph: {
    title: "Contato EFIVAL | Arquitetura e Design Interior em Angola",
    description:
      "Fale com a EFIVAL e solicite orçamento para projetos de arquitetura e design interior em Luanda e Angola.",
    url: "https://seudominio.com/contacto",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "Contato EFIVAL | Arquitetura e Design Interior em Angola",
    description:
      "Solicite orçamento para projetos de arquitetura e design interior em Luanda com a EFIVAL."
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function Contato() {
  return (
    <>
      <BannerContato />
      <ContatoSection />
      <ContactForm />
      <CTAFinalContato />
    </>
  );
}
