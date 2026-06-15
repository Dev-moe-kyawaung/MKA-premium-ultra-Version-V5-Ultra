import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://moekyawaung.github.io"),
  title: {
    default: "Moe Kyaw Aung | Senior Android Developer",
    template: "%s | Moe Kyaw Aung",
  },
  description:
    "Premium senior Android and Flutter developer portfolio. 5+ years delivering clean architecture, scalable systems, and premium UI/UX with Kotlin, Jetpack Compose, and Flutter.",
  keywords: [
    "Senior Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Next.js",
    "TailwindCSS",
    "GitHub Pages",
    "Moe Kyaw Aung",
    "Mobile Engineer",
  ],
  author: {
    name: "Moe Kyaw Aung",
    url: "https://github.com/Moekyawaung",
  },
  openGraph: {
    title: "Moe Kyaw Aung | Senior Android Developer",
    description:
      "Premium portfolio for Android, Flutter, and frontend engineering work with 5+ years experience.",
    url: "https://moekyawaung.github.io",
    siteName: "Moe Kyaw Aung Portfolio",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moe Kyaw Aung Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe Kyaw Aung | Senior Android Developer",
    description:
      "Premium portfolio for Android, Flutter, and frontend engineering work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#07111f] text-white antialiased">
        <Header />
        {children}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
