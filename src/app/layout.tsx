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
  title: "Leon Hebeisen – Lernender Applikationsentwickler",
  description:
    "Leon Hebeisen, Lernender Applikationsentwickler EFZ. Portfolio.",
  metadataBase: new URL("https://leonhebeisen.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Leon Hebeisen – Lernender Applikationsentwickler",
    description:
      "Leon Hebeisen, Lernender Applikationsentwickler EFZ. Portfolio.",
    url: "https://leonhebeisen.com",
    siteName: "Leon Hebeisen",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Leon Hebeisen – Portfolio",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leon Hebeisen",
  url: "https://leonhebeisen.com",
  jobTitle: "Lernender Applikationsentwickler EFZ",
  worksFor: { "@type": "Organization", name: "Noser Young" },
  sameAs: [
    "https://github.com/lelelon225",
    "https://www.linkedin.com/in/leonhebeisen",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
