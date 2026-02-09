import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sophia Group - Soluciones para la Propiedad Horizontal con IA",
  description:
    "Administración integral de Propiedad Horizontal con tecnología e Inteligencia Artificial. Transparencia, eficiencia y cumplimiento normativo.",
  keywords: [
    "propiedad horizontal",
    "administración PH",
    "ley 675",
    "sophia group",
    "inteligencia artificial",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
