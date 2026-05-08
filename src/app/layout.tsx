import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

const siteUrl = "https://makersailabs.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makers AI Labs | Enterprise AI & Software Engineering",
  description:
    "Makers AI Labs crafts high-performance AI, web, and cloud solutions for ambitious enterprises worldwide.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Makers AI Labs | Enterprise AI & Software Engineering",
    description:
      "Enterprise AI, web, and cloud engineering built to accelerate growth and deliver measurable impact.",
    url: siteUrl,
    siteName: "Makers AI Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Makers AI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makers AI Labs | Enterprise AI & Software Engineering",
    description:
      "Enterprise AI, web, and cloud engineering built to accelerate growth and deliver measurable impact.",
    images: ["/twitter-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Makers AI Labs",
  url: siteUrl,
  logo: `${siteUrl}/opengraph-image`,
  email: "hello@makersailabs.com",
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
  name: "Makers AI Labs",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 pb-20 text-slate-900 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
