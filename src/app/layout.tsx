import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wildlife Rescue & Conservation | Ashvkatha",
  description: "Ashvkatha supports wildlife rescue, veterinary care, habitat conservation, and community awareness across India. Supported by Surya Foundation in Junagadh.",
  openGraph: {
    title: "Wildlife Rescue & Conservation | Ashvkatha",
    description: "Protecting India's Wildlife Through Rescue, Rehabilitation & Conservation. Supported by Surya Foundation in Junagadh, Gujarat.",
    url: "https://ashvkatha.in",
    siteName: "Ashvkatha",
    images: [
      {
        url: "/elephant.png",
        width: 1200,
        height: 630,
        alt: "Wildlife Rescue at Ashvkatha",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildlife Rescue & Conservation | Ashvkatha",
    description: "Protecting India's Wildlife Through Rescue, Rehabilitation & Conservation.",
    images: ["/elephant.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Ashvkatha",
    "url": "https://ashvkatha.in",
    "logo": "https://ashvkatha.in/elephant.png",
    "description": "Ashvkatha supports wildlife rescue, veterinary care, habitat conservation, and community awareness across India.",
    "sponsor": {
      "@type": "Organization",
      "name": "Surya Foundation"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Junagadh",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
