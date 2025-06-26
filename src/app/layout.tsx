import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Intan Sulistiya - Laravel Developer Portfolio",
  description: "Portfolio Intan Sulistiya, Laravel Developer yang menciptakan website elegan & user friendly. Spesialisasi dalam pengembangan aplikasi web modern dengan teknologi terdepan.",
  keywords: [
    "Intan Sulistiya",
    "Laravel Developer",
    "Web Developer",
    "Portfolio",
    "PHP Developer",
    "Full Stack Developer",
    "Indonesia",
    "Makassar"
  ],
  authors: [{ name: "Intan Sulistiya" }],
  creator: "Intan Sulistiya",
  publisher: "Intan Sulistiya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://intansulistiya.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Intan Sulistiya - Laravel Developer Portfolio",
    description: "Portfolio Intan Sulistiya, Laravel Developer yang menciptakan website elegan & user friendly.",
    url: "https://intansulistiya.vercel.app",
    siteName: "Intan Sulistiya Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Intan Sulistiya - Laravel Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intan Sulistiya - Laravel Developer Portfolio",
    description: "Portfolio Intan Sulistiya, Laravel Developer yang menciptakan website elegan & user friendly.",
    images: ["/og-image.jpg"],
    creator: "@intansulistiya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preconnect untuk performa */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch untuk external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="antialiased bg-white text-slate-900 selection:bg-purple-200 selection:text-purple-900">
        {children}
      </body>
    </html>
  );
}
