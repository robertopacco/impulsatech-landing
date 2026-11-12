import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMPULSATECH | Tecnología que impulsa negocios",
  description:
    "NFC, QR, páginas web, automatizaciones, WhatsApp e IA para negocios que quieren vender más y atender mejor.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
