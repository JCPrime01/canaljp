import { ChevronsRight, MessageCircle, Send } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = {
  telegram:
    'https://track.grupojc.cc/track/34c58208-a263-4454-bbc4-6b736e47d42b/redirect',
  whatsapp: 'https://cmd-mago-todas-fgy3.vercel.app/',
  terms: 'https://lp-maguinho-tl-es.vercel.app/termos-de-uso.html',
  privacy:
    'https://lp-maguinho-tl-es.vercel.app/politica-de-privacidade.html',
};

export default function Home() {
  return (
    <main className="hero-shell">
      <div className="pitch-art" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <section className="hero-content" aria-labelledby="hero-title">
        <div className="headline-wrap">
          <span className="comic-kicker" aria-hidden="true">
            ⚽
          </span>
          <h1 id="hero-title" className="hero-title">
            <span>ACESSO</span>
            <span className="hero-title-accent">LIBERADO</span>
          </h1>
        </div>

        <p className="hero-subtitle">
          Entre no meu <strong>grupo gratuito</strong> que vou liberar as minhas
          análises todos os dias
        </p>

        <div className="cta-stack">
          <a
            href={links.telegram}
            className={cn(buttonVariants(), 'primary-cta')}
            aria-label="Quero entrar agora"
          >
            <span className="cta-icon" aria-hidden="true">
              <Send />
            </span>
            <span>Quero entrar agora</span>
            <ChevronsRight className="cta-arrow" aria-hidden="true" />
          </a>

          <p className="legal-note">
            Ao clicar no botão você concorda com nossos{' '}
            <a href={links.terms}>Termos</a> e{' '}
            <a href={links.privacy}>Políticas</a>
          </p>

          <a
            href={links.whatsapp}
            className="secondary-cta"
            aria-label="Clique aqui se você não tiver Telegram"
          >
            <MessageCircle aria-hidden="true" />
            <span>Clique aqui se você não tiver Telegram</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <p className="responsibility">🔞 Jogue com Responsabilidade</p>
        <p className="disclaimer">
          Este site não é do Facebook. Este site não faz parte do site do
          Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado
          pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial
          independente da FACEBOOK, Inc.
        </p>
        <p>Todos os direitos reservados © 2026</p>
        <nav aria-label="Links legais">
          <a href={links.terms}>Termos de Uso</a>
          <span aria-hidden="true">|</span>
          <a href={links.privacy}>Política de Privacidade</a>
        </nav>
      </footer>
    </main>
  );
}
