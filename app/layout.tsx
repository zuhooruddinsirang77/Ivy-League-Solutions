import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { organizationSchema } from "@/lib/schema";

/* ── Fonts (zero layout shift, self-hosted via next/font) ────
   Headings: Sora  — modern, strong, excellent optical spacing
   Body:     Inter — industry gold standard for readability
   Mono:     JetBrains Mono — for numbers & code accents
─────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* ── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://ivyleaguesolutions.ai"),
  title: {
    default: "Ivy League Solutions — AI for Fintech & HealthTech",
    template: "%s | Ivy League Solutions",
  },
  description:
    "Ivy League Solutions builds custom AI products for Fintech and HealthTech companies. From intelligent automation to predictive analytics — we deliver enterprise-grade AI that drives measurable outcomes.",
  keywords: [
    "AI solutions", "fintech AI", "healthtech AI", "custom AI development",
    "machine learning", "artificial intelligence", "AI consulting",
    "financial AI", "healthcare AI", "predictive analytics", "automation", "North America",
  ],
  authors: [{ name: "Ivy League Solutions", url: "https://ivyleaguesolutions.ai" }],
  creator: "Ivy League Solutions",
  publisher: "Ivy League Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ivyleaguesolutions.ai",
    siteName: "Ivy League Solutions",
    title: "Ivy League Solutions — AI for Fintech & HealthTech",
    description: "Enterprise-grade AI solutions for the future of finance and healthcare. Custom-built. Measurably impactful.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ivy League Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivy League Solutions — AI for Fintech & HealthTech",
    description: "Enterprise-grade AI solutions for the future of finance and healthcare.",
    images: ["/og-image.png"],
    creator: "@ivyleagueai",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://ivyleaguesolutions.ai" },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-background text-text-primary font-body antialiased overflow-x-hidden selection:bg-cyan/20 selection:text-text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
