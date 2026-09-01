import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Acesso Liberado',
  description:
    'Entre no grupo gratuito e receba análises de futebol todos os dias.',
  openGraph: {
    title: 'Acesso Liberado',
    description:
      'Entre no grupo gratuito e receba análises de futebol todos os dias.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Acesso Liberado — análises todos os dias',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acesso Liberado',
    description:
      'Entre no grupo gratuito e receba análises de futebol todos os dias.',
    images: ['/og.png'],
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
