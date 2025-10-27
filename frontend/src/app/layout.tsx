import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baseball Data Platform",
  description: "TrackMan CSV data visualization and analytics platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <div className="page-container">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}