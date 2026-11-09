import type { Metadata } from "next";
import "./globals.css";
import "./elemental.css";

export const metadata: Metadata = {
  title: "Krzysztof Tomecki — UX/UI Designer",
  description: "Komercyjne projekty UX/UI Krzysztofa Tomeckiego: warsztaty z klientami, architektura informacji, interfejsy i wdrożenia. Fabb, Propoint, i4TECH i Likeat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Hanken+Grotesk:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
