import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Ao">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {/* Header */}
        <Header />

        <main>
          {children}
        </main>

        {/* Botão WhatsApp fixo do site */}
        <WhatsAppButton phone="244924034804" size={64} />
        <Toaster
          position="top-right"
          containerStyle={{
            zIndex: 10000,
          }}
        />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}