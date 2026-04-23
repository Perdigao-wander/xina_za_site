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
    url: "https://xina-za-site.vercel.app/", // Altera para o teu domínio real
    siteName: "Xina Za",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/assets/Xina_za_transparente.png",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ec4899",
      },
    ],
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