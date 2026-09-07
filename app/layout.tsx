import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://canaljp.vercel.app',
  ),
  title: 'CANAL DO JOTA',
  description:
    'Entre no meu canal gratuito e receba análises de futebol todos os dias.',
  openGraph: {
    title: 'CANAL DO JOTA',
    description:
      'Entre no meu canal gratuito e receba análises de futebol todos os dias.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'CANAL DO JOTA — análises todos os dias',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CANAL DO JOTA',
    description:
      'Entre no meu canal gratuito e receba análises de futebol todos os dias.',
    images: ['/og.png'],
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
