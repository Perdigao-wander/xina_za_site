import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xina Za - Preservação de Dialetos de São Tomé e Príncipe",
  description: "Plataforma digital para preservação, estudo e ensino dos dialetos e línguas de São Tomé e Príncipe (Forro, Angolar, Lunguyê, etc.)",
  keywords: [
    "Xina Za",
    "dialetos de São Tomé e Príncipe",
    "Forro",
    "Angolar",
    "Lunguyê",
    "preservação linguística",
    "línguas crioulas",
    "património cultural",
    "São Tomé e Príncipe"
  ],
  authors: [{ name: "Xina Za" }],
  creator: "Xina Za",
  publisher: "Xina Za",
  applicationName: "Xina Za",
  openGraph: {
    title: "Xina Za - Preservação de Dialetos de São Tomé e Príncipe",
    description:
        "Plataforma digital para preservação, estudo e ensino dos dialetos e línguas de São Tomé e Príncipe (Forro, Angolar, Lunguyê, etc.)",
    url: "https://xinaza.com", // Altera para o teu domínio real
    siteName: "Xina Za",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/assets/Xina_za_transparente.png", // Adiciona uma imagem OG depois
        width: 1200,
        height: 630,
        alt: "Xina Za — Aprende Dialetos de Forma Autêntica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xina Za - Preservação de Dialetos de São Tomé e Príncipe",
    description:         "Plataforma digital para preservação, estudo e ensino dos dialetos e línguas de São Tomé e Príncipe (Forro, Angolar, Lunguyê, etc.)",
    images: ["/assets/Xina_za_transparente.png"],
    creator: "@xinaza", // Altera para o teu Twitter/X real
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#000000",
  colorScheme: "light dark",
  category: "education",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="pt"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">{children}</body>
      </html>
  );
}