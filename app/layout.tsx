import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMPULSATECH | Tecnología que impulsa negocios",
  description:
    "NFC, QR, páginas web, automatizaciones, WhatsApp e IA para negocios que quieren vender más y atender mejor.",
  icons: {
    icon: [
      { url: "/marca/favicon.ico", sizes: "any" },
      { url: "/marca/impulsatech-icono-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/marca/favicon.ico",
    apple: [
      { url: "/marca/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
