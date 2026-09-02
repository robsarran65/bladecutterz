import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bladecutterz-florida.chatgpt-sites.com"),
  title: "Orlando Lawn Care & Landscaping | BladeCutterz Inc.",
  description: "BladeCutterz Inc. provides dependable lawn care and landscaping in Orlando, Lake Nona, Winter Springs, ZIP codes 32832 and 32708, and nearby areas.",
  keywords: ["Orlando lawn care", "Orlando landscaping", "Lake Nona lawn care", "Winter Springs lawn care", "lawn care 32832", "lawn care 32708", "shrub trimming", "tree trimming", "irrigation services", "mulching services", "landscape maintenance"],
  openGraph: {
    title: "Orlando Lawn Care & Landscaping | BladeCutterz Inc.",
    description: "Reliable lawn care and landscaping for Orlando, Lake Nona, Winter Springs, and nearby communities. Free estimates: (407) 334-7247.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1659, height: 948, alt: "BladeCutterz Inc. — Your Lawn. Our Precision." }],
  },
  twitter: { card: "summary_large_image", title: "BladeCutterz Inc. | Orlando Lawn Care", description: "Serving Orlando, Lake Nona, Winter Springs, and nearby communities. Call (407) 334-7247 for a free estimate.", images: ["/og.png"] },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#103c2c" };

const schema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "BladeCutterz Inc.",
  telephone: "+1-407-334-7247",
  description: "Lawn care and property maintenance serving Orlando, Lake Nona, Winter Springs, and communities surrounding ZIP codes 32832 and 32708.",
  areaServed: [
    { "@type": "Place", name: "Orlando, Florida" },
    { "@type": "Place", name: "Lake Nona, Orlando, Florida" },
    { "@type": "Place", name: "Moss Park, Orlando, Florida" },
    { "@type": "Place", name: "Narcoossee, Orlando, Florida" },
    { "@type": "Place", name: "Winter Springs, Florida" },
    { "@type": "Place", name: "Tuscawilla, Winter Springs, Florida" },
    { "@type": "Place", name: "Oviedo, Florida" },
    { "@type": "Place", name: "Casselberry, Florida" },
    { "@type": "Place", name: "ZIP code 32832" },
    { "@type": "Place", name: "ZIP code 32708" },
  ],
  priceRange: "$$",
  serviceType: ["Lawn care", "Landscape maintenance", "Shrub trimming", "Tree trimming", "Irrigation services", "Mulching", "Landscape cleanup"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>{children}</body></html>;
}
