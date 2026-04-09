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