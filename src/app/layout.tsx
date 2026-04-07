import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne, DM_Sans } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/UI/Navbar";
import { Footer } from "@/components/UI/Footer";

const syne = Syne({
    subsets: ['latin'],
    variable: '--font-syne'
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans'
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sahib Hernández – Software Engineer",
    description: "Personal website created as a portfolio showcasing Sahib Hernandez's career as a software engineer, including projects, skills, and contact information.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://api.fontshare.com" />
                <link
                    rel="stylesheet"
                    href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&f[]=satoshi@700,500,400&display=swap"
                />
            </head>
            <body className="flex flex-col min-h-screen bg-neutral-950">
                {/* <div className="fixed inset-0 -z-10 bg-neutral-950">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]" />
                </div> */}
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
