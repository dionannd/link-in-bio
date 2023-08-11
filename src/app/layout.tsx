import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dian Ananda - Links",
  description: "Link in Bio",
  authors: [{ name: "Dian Ananda", url: "https://www.dianananda.site" }],
  keywords:
    "dian ananda, dian ananda link, link in bio, dian link in bio, dion link, dion ananda, link dion, link dian",
  viewport: { width: "device-width", initialScale: 1 },
  creator: "Dian Ananda",
  robots: { index: false, follow: false },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
  openGraph: {
    title: "Dian Ananda - Links",
    description: "My link in bio cool page",
    url: "https://links.dianananda.site",
    siteName: "Dian Ananda",
    images: [
      {
        url: "/images/og.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dionannd",
    creator: "@dionannd",
    images: "/images/og.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
