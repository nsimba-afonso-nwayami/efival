import BannerContato from "@/components/contato/BannerContato";
import ContatoSection from "@/components/contato/ContatoSection";
import ContactForm from "@/components/contato/ContactForm";
import CTAFinalContato from "@/components/contato/CTAFinalContato";

// SEO otimizado para página Contato
export const metadata = {
  title: "Contato EFIVAL | Orçamento de Construção Civil em Luanda",

  description:
    "Entre em contato com a EFIVAL para solicitar orçamento de construção civil em Angola. Estamos disponíveis para obras residenciais, comerciais, reabilitação de edifícios e projetos de engenharia em Luanda e outras províncias.",

  keywords: [
    "contacto EFIVAL",
    "empresa de construção Luanda contacto",
    "orçamento construção civil Angola",
    "empreiteiro em Luanda contacto",
    "construtora Angola contacto",
    "pedido de orçamento construção Angola",
    "engenharia civil Luanda contacto",
    "reabilitação de edifícios Angola contacto",
    "serviços de construção Angola contacto",
    "EFIVAL contato"
  ],

  openGraph: {
    title: "Contato EFIVAL | Orçamento de Construção Civil em Angola",
    description:
      "Fale com a EFIVAL e solicite orçamento para construção civil, obras e engenharia em Luanda e Angola.",
    url: "https://seudominio.com/contacto",
    siteName: "EFIVAL",
    type: "website",
    locale: "pt_AO"
  },

  twitter: {
    card: "summary_large_image",
    title: "Contacto EFIVAL | Construção Civil Angola",
    description:
      "Solicite orçamento de construção civil em Luanda com a EFIVAL."
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
