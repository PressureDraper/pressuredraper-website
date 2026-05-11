import type { Metadata } from 'next';
import '../globals.css';
import { Navbar } from '@/components/UI/Navbar';
import { Footer } from '@/components/UI/Footer';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { SmoothScrollProvider } from '@/components/UI/SmoothScrollProvider';

export const metadata: Metadata = {
    metadataBase: new URL('https://presoftcore.com'),
    title: 'Sahib Hernández | Full-Stack Software Engineer',
    description:
        "Personal website created as a portfolio showcasing Sahib Hernandez's career as a software engineer, including projects, skills, and contact information.",
    keywords: [
        'Sahib Hernández',
        'Software Engineer',
        'Portfolio',
        'Node.js',
        'Typescript',
        'React',
        'Full stack',
        'Developer',
    ],
    authors: [{ name: 'Sahib Hernández' }],
    openGraph: {
        title: 'Sahib Hernández | Full-Stack Software Engineer',
        description:
            "Personal website created as a portfolio showcasing Sahib Hernandez's career as a software engineer, including projects, skills, and contact information.",
        url: 'https://presoftcore.com',
        siteName: 'presoftcore',
        images: [
            {
                url: 'https://presoftcore.com/cover.webp',
                width: 1200,
                height: 630,
                alt: 'Sahib Hernández Portfolio Open Graph Image',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {

    const { locale } = await params;
    if (!routing.locales.includes(locale as any)) notFound();

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <link rel="preconnect" href="https://api.fontshare.com" />
                <link
                    rel="stylesheet"
                    href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&f[]=satoshi@700,500,400&display=swap"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Sahib Hernández',
                            url: 'https://presoftcore.com',
                            jobTitle: 'Software Engineer',
                            knowsAbout: [
                                'Node.js',
                                'TypeScript',
                                'React',
                                'Redux',
                                'Zustand',
                                'Vite',
                                'Next.js',
                                'Tailwind CSS',
                                'MUI Material',
                                'Express.js',
                                'Biome',
                                'Prisma ORM',
                                'Redis',
                                'Jest',
                                'JWT',
                                'MariaDB',
                                'SQLite',
                                'Firebase',
                                'Full Stack Development',
                            ],
                            sameAs: [
                                'https://github.com/PressureDraper',
                                'https://linkedin.com/in/pressuredraper',
                            ],
                        }),
                    }}
                />
            </head>
            <body className="flex flex-col min-h-screen bg-neutral-950">
                <NextIntlClientProvider messages={messages}>
                    <SmoothScrollProvider>
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </SmoothScrollProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
