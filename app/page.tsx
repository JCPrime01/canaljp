import { Send } from 'lucide-react';
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

function WhatsAppIcon() {
  return (
    <svg
      className="whatsapp-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
            Entre no meu <strong>grupo gratuito</strong> onde libero minhas análise
            todos os dias.
          </p>

          <div className="cta-stack">
            <a
              href={links.telegram}
              className={cn(buttonVariants(), 'primary-cta')}
              aria-label="Entrar no grupo"
            >
              <span className="cta-icon" aria-hidden="true">
                <Send />
              </span>
              <span>Entrar no grupo</span>
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
              <WhatsAppIcon />
              <span>Clique aqui se você não tiver Telegram</span>
            </a>
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
