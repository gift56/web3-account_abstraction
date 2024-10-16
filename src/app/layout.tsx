import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header className="bg-white px-4 w-full md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <Navbar />
          </header>
          <main className="bg-slate-100 px-4 w-full md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
