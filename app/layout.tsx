import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://comunidadejc-es.vercel.app',
  ),
  title: 'COMUNIDADE DO JOTA',
  description:
    'Entre na comunidade gratuita e receba análises de futebol todos os dias.',
  openGraph: {
    title: 'COMUNIDADE DO JOTA',
    description:
      'Entre na comunidade gratuita e receba análises de futebol todos os dias.',
    images: [
      {
        url: '/og-comunidade-do-jota.png',
        width: 1200,
        height: 630,
        alt: 'COMUNIDADE DO JOTA — análises todos os dias',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COMUNIDADE DO JOTA',
    description:
      'Entre na comunidade gratuita e receba análises de futebol todos os dias.',
    images: ['/og-comunidade-do-jota.png'],
  },
  icons: {
    icon: '/favicon-jc.svg',
    shortcut: '/favicon-jc.svg',
    apple: '/favicon-jc.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
