import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Organic Herbal",
  description: "We provide a wide variety of high-quality herbs, spices, and their powders. Perfect for culinary and medicinal uses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="StKnFVMdxYtC2pDJPSr7oQjfKmXrAl1UXRLLkokFj8o" />
        <meta name="description" content="Discover a wide variety of high-quality herbs, spices, and their powders. Perfect for culinary and medicinal uses." />
        <meta name="keywords" content="herbs, spices, powders, and raw materials" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
