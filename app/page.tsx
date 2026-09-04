import { Send } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = {
  telegram:
    'https://track.grupojc.cc/track/34c58208-a263-4454-bbc4-6b736e47d42b/redirect',
  terms: 'https://lp-comunidade-one.vercel.app/termos-de-uso.html',
  privacy:
    'https://lp-comunidade-one.vercel.app/politica-de-privacidade.html',
};

function FootballDecor() {
  return (
    <div className="football-row" aria-hidden="true">
      <img
        className="football-ball football-ball-one"
        src="/football-single.png"
        alt=""
        width="1254"
        height="1254"
      />
      <img
        className="football-ball football-ball-two"
        src="/football-single.png"
        alt=""
        width="1254"
        height="1254"
      />
      <img
        className="football-ball football-ball-three"
        src="/football-single.png"
        alt=""
        width="1254"
        height="1254"
      />
      <img
        className="football-ball football-ball-four"
        src="/football-single.png"
        alt=""
        width="1254"
        height="1254"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="hero-shell">
      <div className="pitch-art" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <FootballDecor />

      <section className="hero-content" aria-labelledby="hero-title">
        <div className="headline-wrap">
          <h1 id="hero-title" className="hero-title">
            <span>ACESSO</span>
            <span className="hero-title-accent">LIBERADO</span>
          </h1>
        </div>

        <div className="details-stack">
          <p className="hero-subtitle">
            Entre na minha <strong>comunidade gratuita</strong> onde libero minhas
            análise todos os dias.
          </p>

          <div className="cta-stack">
            <a
              href={links.telegram}
              className={cn(buttonVariants(), 'primary-cta')}
              aria-label="Entrar na comunidade"
            >
              <span className="cta-icon" aria-hidden="true">
                <Send />
              </span>
              <span>Entrar na comunidade</span>
            </a>

            <p className="legal-note">
              Ao clicar no botão você concorda com nossos{' '}
              <a href={links.terms}>Termos</a> e{' '}
              <a href={links.privacy}>Políticas</a>
            </p>

          </div>
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
