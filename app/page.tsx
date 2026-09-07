import type { MouseEvent } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    dispararLead?: () => string | undefined;
    _lastLeadEventId?: string;
  }
}

const CONTENT = {
  label: 'Entrar no canal',
  href: 'https://track.grupojc.cc/track/73cd9930-51c4-45aa-9abb-ace3f8942964/wa?next=https://ca.estrela.work/',
  terms: 'https://lp-comunidade-one.vercel.app/termos-de-uso.html',
  privacy: 'https://lp-comunidade-one.vercel.app/politica-de-privacidade.html',
};

const TRACK_HOST = 'track.grupojc.cc';
const UTM_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'campaign', 'fbclid', 'gclid', 'cid', 'account_id', 'bot',
];

function mergeTrackingParams(href: string): URL {
  const params = new URLSearchParams(window.location.search);
  const url = new URL(href);
  UTM_KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) url.searchParams.set(k, v);
  });
  if (url.hostname === TRACK_HOST) {
    const fbp = document.cookie.match(/(?:^|; )_fbp=([^;]+)/);
    const fbc = document.cookie.match(/(?:^|; )_fbc=([^;]+)/);
    if (fbp) url.searchParams.set('fbp', decodeURIComponent(fbp[1]));
    if (fbc) {
      url.searchParams.set('fbc', decodeURIComponent(fbc[1]));
    } else if (params.get('fbclid')) {
      url.searchParams.set('fbc', `fb.1.${Date.now()}.${params.get('fbclid')}`);
    }
  }
  return url;
}

function handleCtaClick(e: MouseEvent<HTMLAnchorElement>) {
  try {
    const anchor = e.currentTarget;
    const baseHref = anchor.getAttribute('data-href') || anchor.href;
    const url = mergeTrackingParams(baseHref);
    try {
      if (typeof window.dispararLead === 'function') {
        const eid = window.dispararLead();
        if (eid && url.hostname === TRACK_HOST) url.searchParams.set('eid', eid);
      }
    } catch {
      /* ignore */
    }
    anchor.href = url.toString();
  } catch {
    /* ignore */
  }
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
            Entre no meu <strong>canal gratuito</strong> onde libero minhas
            análise todos os dias.
          </p>

          <div className="cta-stack">
            <a
              href={CONTENT.href}
              data-href={CONTENT.href}
              data-trackpanel
              target="_self"
              rel="noopener"
              onClick={handleCtaClick}
              className={cn(buttonVariants(), 'primary-cta')}
              aria-label={CONTENT.label}
            >
              <span className="cta-icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span>{CONTENT.label}</span>
            </a>

            <p className="legal-note">
              Ao clicar no botão você concorda com nossos{' '}
              <a href={CONTENT.terms}>Termos</a> e{' '}
              <a href={CONTENT.privacy}>Políticas</a>
            </p>

          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img
          className="selo-legal-footer"
          src="/selo-esportiva.png"
          alt="Ministério da Fazenda adverte: Aposta não é investimento. Autorizado pela Portaria SPA/MF N-2.104-27"
          width="900"
          height="200"
        />
        <nav aria-label="Links legais">
          <a href={CONTENT.terms}>Termos de Uso</a>
          <span aria-hidden="true">|</span>
          <a href={CONTENT.privacy}>Política de Privacidade</a>
        </nav>
      </footer>
    </main>
  );
}
