import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MapleChatbot } from "@/components/maple-chatbot";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { mapleLogo } from "@/content/brand";

const siteUrl = "https://mapleaitechnologies.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Maple AI Technologies | Enterprise AI & Software Engineering",
  description:
    "Maple AI Technologies crafts high-performance AI, web, and cloud solutions for ambitious enterprises worldwide.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: mapleLogo.src,
    apple: mapleLogo.src,
  },
  openGraph: {
    title: "Maple AI Technologies | Enterprise AI & Software Engineering",
    description:
      "Enterprise AI, web, and cloud engineering built to accelerate growth and deliver measurable impact.",
    url: siteUrl,
    siteName: "Maple AI Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maple AI Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple AI Technologies | Enterprise AI & Software Engineering",
    description:
      "Enterprise AI, web, and cloud engineering built to accelerate growth and deliver measurable impact.",
    images: ["/twitter-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maple AI Technologies",
  url: siteUrl,
  logo: `${siteUrl}${mapleLogo.file}`,
  email: "hello@mapleaitechnologies.com",
  description:
    "Enterprise AI and product engineering partner delivering high-performance digital platforms.",
  sameAs: [
    "https://www.linkedin.com",
    "https://x.com",
    "https://dribbble.com",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maple AI Technologies",
  url: siteUrl,
  potentialAction: {
    "@type": "ContactAction",
    target: `${siteUrl}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ptSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="maple-site-bg min-h-full pb-20 text-foreground md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteHeader />
        <main className="maple-site-shell min-w-0 overflow-x-clip">{children}</main>
        <SiteFooter />
        <MobileStickyCta />
        <MapleChatbot />
      </body>
    </html>
  );
}
