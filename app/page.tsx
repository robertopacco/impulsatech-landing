"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type IconName =
  | "spark"
  | "arrow"
  | "nfc"
  | "qr"
  | "web"
  | "bot"
  | "chat"
  | "star"
  | "check"
  | "chevron"
  | "menu"
  | "close"
  | "bolt"
  | "pin"
  | "shield";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    spark: <><path d="M12 2l1.5 5.1L18 9l-4.5 1.9L12 16l-1.5-5.1L6 9l4.5-1.9L12 2Z"/><path d="M5 15l.8 2.7L8.5 19l-2.7 1.1L5 23l-.8-2.9L1.5 19l2.7-1.3L5 15Z"/><path d="M19 13l.6 2.1L22 16l-2.4.9L19 19l-.6-2.1L16 16l2.4-.9L19 13Z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    nfc: <><path d="M7.8 8.4a5 5 0 0 1 0 7.2"/><path d="M4.8 5.4a9.2 9.2 0 0 1 0 13.2"/><path d="M10.8 10.6a2 2 0 0 1 0 2.8"/><path d="M15 7.5v9"/><path d="M18 10v4"/></>,
    qr: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 20h2M20 14h1"/></>,
    web: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    bot: <><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M9 11h.01M15 11h.01M9 15h6M12 3v4"/><circle cx="12" cy="3" r="1"/></>,
    chat: <><path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.5-4A8.5 8.5 0 1 1 21 12Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.8 2.8 8 7 10 4.2-2 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function QrVisual() {
  return (
    <svg className="qr-visual" viewBox="0 0 120 120" aria-label="Representación gráfica de código QR">
      <rect width="120" height="120" rx="22" fill="white" />
      <g fill="#0b0f16">
        <path d="M16 16h30v30H16V16Zm7 7v16h16V23H23ZM74 16h30v30H74V16Zm7 7v16h16V23H81ZM16 74h30v30H16V74Zm7 7v16h16V81H23Z" fillRule="evenodd" />
        <rect x="56" y="18" width="9" height="9" rx="2" />
        <rect x="56" y="34" width="9" height="18" rx="2" />
        <rect x="49" y="59" width="15" height="9" rx="2" />
        <rect x="73" y="57" width="9" height="9" rx="2" />
        <rect x="88" y="57" width="16" height="9" rx="2" />
        <rect x="56" y="75" width="9" height="26" rx="2" />
        <rect x="72" y="73" width="17" height="9" rx="2" />
        <rect x="95" y="74" width="9" height="18" rx="2" />
        <rect x="72" y="91" width="9" height="13" rx="2" />
        <rect x="84" y="92" width="9" height="9" rx="2" />
      </g>
    </svg>
  );
}

const heroModes = [
  { eyebrow: "PRESENCIA DIGITAL", title: "Haz que tu negocio se vea.", accent: "Y se elija.", body: "Diseñamos experiencias digitales simples que convierten visitas en clientes." },
  { eyebrow: "RESEÑAS + NFC", title: "Más reseñas.", accent: "Menos fricción.", body: "Tus clientes acercan el celular, califican y vuelven. Sin explicar pasos complicados." },
  { eyebrow: "AUTOMATIZACIÓN", title: "Menos tareas repetidas.", accent: "Más tiempo para vender.", body: "Conectamos WhatsApp, formularios, respuestas y flujos para que tu negocio avance solo." },
  { eyebrow: "IA PARA NEGOCIOS", title: "Atiende mejor.", accent: "Incluso cuando no estás.", body: "Agentes y chatbots con IA para responder, filtrar consultas y captar oportunidades." },
];

const services = [
  { icon: "nfc" as IconName, title: "NFC + QR", text: "Reseñas de Google, menús, catálogos, links y acciones con un toque.", tag: "Rápido de implementar" },
  { icon: "web" as IconName, title: "Landing & Web", text: "Sitios modernos, rápidos y pensados para convertir visitas en contactos.", tag: "Diseño + conversión" },
  { icon: "chat" as IconName, title: "WhatsApp", text: "Flujos de atención, mensajes y derivación para responder más rápido.", tag: "Atención comercial" },
  { icon: "bolt" as IconName, title: "Automatizaciones", text: "Procesos conectados para reducir tareas manuales y errores repetitivos.", tag: "Ahorra tiempo" },
  { icon: "bot" as IconName, title: "Agentes IA", text: "Asistentes que consultan información, califican leads y apoyan operaciones.", tag: "Escala tu atención" },
];

const businessTypes = [
  "Restaurante / pollería",
  "Cafetería / pastelería",
  "Hotel / hospedaje",
  "Barbería / salón",
  "Tienda / retail",
  "Clínica / consultorio",
  "Servicios profesionales",
  "Otro",
];

const goals = [
  "Conseguir más reseñas en Google",
  "Tener una página web profesional",
  "Recibir más consultas por WhatsApp",
  "Automatizar tareas repetitivas",
  "Atender clientes automáticamente",
  "Digitalizar menú / catálogo / información",
  "No estoy seguro, quiero asesoría",
];

interface RecommendationInfo {
  solution: string;
  explanation: string;
  badge: string;
}

const recommendationsByGoal: Record<string, RecommendationInfo> = {
  "Conseguir más reseñas en Google": {
    solution: "NFC + QR para Google",
    explanation:
      "Tus clientes acercan el celular a la placa o sticker y califican en Google en 5 segundos sin buscar tu negocio manualmente.",
    badge: "Reputación rápida",
  },
  "Tener una página web profesional": {
    solution: "Landing page / sitio web",
    explanation:
      "Presencia digital moderna, rápida y persuasiva, diseñada para transmitir confianza inmediata y convertir visitas en clientes.",
    badge: "Diseño + conversión",
  },
  "Recibir más consultas por WhatsApp": {
    solution: "Web + WhatsApp Business",
    explanation:
      "Estructura comercial pensada para guiar al visitante directo a tu chat con mensajes preconfigurados y listos para atender.",
    badge: "Captación comercial",
  },
  "Automatizar tareas repetitivas": {
    solution: "Automatizaciones",
    explanation:
      "Conexión de formularios, respuestas, registros y notificaciones para ahorrar horas operativas cada semana.",
    badge: "Ahorra tiempo",
  },
  "Atender clientes automáticamente": {
    solution: "Chatbot / Agente IA",
    explanation:
      "Asistente inteligente disponible 24/7 para responder preguntas frecuentes, calificar prospectos y no perder clientes.",
    badge: "Atención 24/7",
  },
  "Digitalizar menú / catálogo / información": {
    solution: "NFC + QR + solución digital",
    explanation:
      "Acceso instantáneo a tu carta, catálogo o datos clave con un solo toque o escaneo desde cualquier smartphone.",
    badge: "Acceso con un toque",
  },
  "No estoy seguro, quiero asesoría": {
    solution: "Diagnóstico personalizado",
    explanation:
      "Analizamos tu negocio paso a paso y te planteamos la ruta digital más simple, rápida y rentable para empezar.",
    badge: "Asesoría a medida",
  },
};

const cases = [
  { name: "Pastelarte Coffee Cat", category: "NFC para reseñas", metric: "Experiencia en mostrador", glyph: "☕", className: "case-pink" },
  { name: "Pollería Misky", category: "QR + NFC", metric: "Reseñas desde mesa", glyph: "✦", className: "case-gold" },
  { name: "Hospedaje", category: "NFC personalizado", metric: "Reputación local", glyph: "⌂", className: "case-blue" },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="IMPULSATECH inicio">
      <span className="brand-mark"><Icon name="spark" size={18} /></span>
      <span>IMPULSA<span>TECH</span></span>
    </a>
  );
}

const WA_PHONE = "51956843409";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function buildQuoteWhatsAppUrl() {
  const message = [
    "Hola IMPULSATECH",
    "",
    "Vi su página web y quisiera información y una cotización sobre sus soluciones digitales.",
  ].join("\n");
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

function buildConfigWhatsAppUrl(
  businessType: string,
  businessGoal: string,
  solution: string
) {
  const biz = businessType || "mi negocio";
  const g = businessGoal || "crecer";
  const sol = solution || "soluciones digitales";

  const message = [
    "Hola IMPULSATECH",
    "",
    `Tengo un negocio de ${biz}.`,
    "",
    "Mi objetivo es:",
    g,
    "",
    "La web me recomendó:",
    sol,
    "",
    "Quisiera recibir más información y una cotización.",
  ].join("\n");

  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

function buildFloatingWhatsAppUrl() {
  const message = [
    "Hola IMPULSATECH",
    "",
    "Vi su página web y quisiera conocer más sobre sus soluciones digitales.",
  ].join("\n");
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [configStep, setConfigStep] = useState(1);
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [recommendedSolution, setRecommendedSolution] = useState(
    "NFC + QR para Google"
  );
  const [submitted, setSubmitted] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);

  const activeRecommendation = useMemo(() => {
    if (goal && recommendationsByGoal[goal]) {
      return recommendationsByGoal[goal];
    }
    return recommendationsByGoal["Conseguir más reseñas en Google"];
  }, [goal]);

  const handleSelectBusiness = (item: string) => {
    setBusiness(item);
    setConfigStep(2);
  };

  const handleSelectGoal = (item: string) => {
    setGoal(item);
    const rec = recommendationsByGoal[item];
    if (rec) {
      setRecommendedSolution(rec.solution);
    }
    setConfigStep(3);
  };

  const handleResetConfig = () => {
    setConfigStep(1);
    setBusiness("");
    setGoal("");
  };

  const updateCarouselState = () => {
    const el = servicesRef.current;
    if (!el) return;

    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;

    // Detectar card más cercana al CENTRO del viewport del track
    const containerCenter = el.scrollLeft + el.clientWidth / 2;

    let closestIdx = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(cardCenter - containerCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setServiceIndex(closestIdx);
  };

  const scrollToService = (index: number) => {
    const el = servicesRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const targetCard = cards[index];
    if (!targetCard) return;

    // Centrar la card en el viewport del track
    const targetScrollLeft =
      targetCard.offsetLeft + targetCard.offsetWidth / 2 - el.clientWidth / 2;

    el.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "smooth",
    });
  };

  const scrollService = (direction: "left" | "right") => {
    const nextIdx = direction === "right"
      ? Math.min(serviceIndex + 1, services.length - 1)
      : Math.max(serviceIndex - 1, 0);
    scrollToService(nextIdx);
  };

  useEffect(() => {
    updateCarouselState();
    window.addEventListener("resize", updateCarouselState);
    return () => window.removeEventListener("resize", updateCarouselState);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setHeroIndex((i) => (i + 1) % heroModes.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  const currentHero = heroModes[heroIndex];

  function scrollTo(id: string) {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <div className="shell nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#casos">Casos reales</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            href={buildQuoteWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta desktop-only"
            aria-label="Cotizar proyecto por WhatsApp"
          >
            Cotizar proyecto <Icon name="arrow" size={16}/>
          </a>
          <button className="mobile-menu" aria-label="Abrir menú" onClick={() => setMobileOpen((v) => !v)}>
            <Icon name={mobileOpen ? "close" : "menu"} size={23}/>
          </button>
        </div>
        {mobileOpen && (
          <div className="mobile-panel">
            <a href="#servicios" onClick={() => setMobileOpen(false)}>Servicios</a>
            <a href="#como-funciona" onClick={() => setMobileOpen(false)}>Cómo funciona</a>
            <a href="#casos" onClick={() => setMobileOpen(false)}>Casos reales</a>
            <a
              href={buildQuoteWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-panel-cta"
              onClick={() => setMobileOpen(false)}
              aria-label="Cotizar proyecto por WhatsApp"
            >
              Cotizar proyecto
            </a>
          </div>
        )}
      </header>

      <section className="hero" id="inicio">
        <div className="hero-noise" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> {currentHero.eyebrow}</div>
            <div className="hero-title-wrap" key={heroIndex}>
              <h1>{currentHero.title}<br/><em>{currentHero.accent}</em></h1>
              <p>{currentHero.body}</p>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo("configurador")}>Encuentra tu solución <Icon name="arrow" size={18}/></button>
              <button className="btn btn-ghost" onClick={() => scrollTo("casos")}>Ver casos reales</button>
            </div>
            <div className="hero-proof">
              <div className="proof-stars">★★★★★</div>
              <div><strong>Soluciones locales</strong><span>para negocios que quieren crecer</span></div>
            </div>
            <div className="hero-pagination" aria-label="Cambiar mensaje principal">
              {heroModes.map((mode, i) => (
                <button key={mode.eyebrow} aria-label={`Ver ${mode.eyebrow}`} className={i === heroIndex ? "active" : ""} onClick={() => setHeroIndex(i)}><span /></button>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Visual de soluciones digitales">
            <div className="visual-glow" />
            <div className="phone-shell">
              <div className="phone-top"><span></span><small>IMPULSATECH</small><span></span></div>
              <div className="phone-screen">
                <div className="mini-label">TU NEGOCIO</div>
                <div className="mini-card-title">Más visible.<br/>Más conectado.</div>
                <div className="mini-review">
                  <span className="mini-avatar">I</span>
                  <div><strong>Reseñas Google</strong><small>Activa con NFC o QR</small></div>
                  <span className="mini-stars">★★★★★</span>
                </div>
                <div className="mini-flow">
                  <span>Cliente</span><i>→</i><span>NFC</span><i>→</i><span>Reseña</span>
                </div>
              </div>
            </div>
            <div className="float-card qr-card"><QrVisual/><div><strong>Escanea</strong><small>Conecta en segundos</small></div></div>
            <div className="float-card nfc-card"><span className="nfc-pulse"><Icon name="nfc" size={26}/></span><div><strong>Acerca tu celular</strong><small>NFC listo para usar</small></div></div>
            <div className="float-card ai-card"><span className="ai-dot"><Icon name="bot" size={20}/></span><div><strong>IA activa</strong><small>Atención automatizada</small></div></div>
          </div>
        </div>
        <div className="hero-strip">
          <div className="shell strip-grid">
            <div><strong>NFC + QR</strong><span>Reputación y acceso rápido</span></div>
            <div><strong>Web</strong><span>Presencia que convierte</span></div>
            <div><strong>Automatización</strong><span>Procesos conectados</span></div>
            <div><strong>IA</strong><span>Atención inteligente</span></div>
          </div>
        </div>
      </section>

      <section className="config-section" id="configurador">
        <div className="shell config-grid">
          <div className="section-intro">
            <div className="kicker">ELIGE TU OPORTUNIDAD</div>
            <h2>Tu negocio merece<br/><span>otra oportunidad.</span></h2>
            <p>Cuéntanos qué tienes y qué quieres lograr. Te mostramos una ruta inicial sin tecnicismos.</p>
            <div className="local-chip"><Icon name="pin" size={17}/> Atención para negocios locales y remotos</div>
          </div>
          <div className="config-card">
            <div className="config-stepper-top">
              <div className="config-step-indicator">
                <span className="config-step-pill">Paso {configStep} de 3</span>
                {configStep > 1 && (
                  <button
                    type="button"
                    className="config-back-link"
                    onClick={() => setConfigStep((s) => s - 1)}
                    aria-label="Volver al paso anterior"
                  >
                    <Icon name="arrow" size={14} /> Volver
                  </button>
                )}
              </div>
              <div
                className="config-progress-bar"
                role="progressbar"
                aria-valuenow={configStep}
                aria-valuemin={1}
                aria-valuemax={3}
              >
                <div
                  className="config-progress-fill"
                  style={{
                    width:
                      configStep === 1 ? "33%" : configStep === 2 ? "66%" : "100%",
                  }}
                />
              </div>
            </div>

            {configStep === 1 && (
              <div className="config-step-pane" key="step-1">
                <div className="config-question">
                  <h3>¿Qué tipo de negocio tienes?</h3>
                  <p>Selecciona tu rubro para personalizar las soluciones:</p>
                </div>
                <div className="config-choice-grid">
                  {businessTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`config-choice-btn ${business === item ? "selected" : ""}`}
                      onClick={() => handleSelectBusiness(item)}
                    >
                      <span>{item}</span>
                      <span className="choice-check">
                        {business === item ? (
                          <Icon name="check" size={16} />
                        ) : (
                          <span className="choice-circle" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                {business && (
                  <div className="config-step-actions">
                    <button
                      type="button"
                      className="btn btn-primary config-continue-btn"
                      onClick={() => setConfigStep(2)}
                    >
                      Continuar <Icon name="arrow" size={16} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {configStep === 2 && (
              <div className="config-step-pane" key="step-2">
                <div className="config-question">
                  <div className="config-context-badge">
                    <Icon name="pin" size={14} /> Negocio: <strong>{business}</strong>
                  </div>
                  <h3>¿Qué quieres mejorar?</h3>
                  <p>Elige tu objetivo principal para recomendarte la mejor alternativa:</p>
                </div>
                <div className="config-choice-grid">
                  {goals.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`config-choice-btn ${goal === item ? "selected" : ""}`}
                      onClick={() => handleSelectGoal(item)}
                    >
                      <span>{item}</span>
                      <span className="choice-check">
                        {goal === item ? (
                          <Icon name="check" size={16} />
                        ) : (
                          <span className="choice-circle" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                {goal && (
                  <div className="config-step-actions">
                    <button
                      type="button"
                      className="btn btn-primary config-continue-btn"
                      onClick={() => setConfigStep(3)}
                    >
                      Ver recomendación <Icon name="arrow" size={16} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {configStep === 3 && (
              <div className="config-step-pane" key="step-3">
                <div className="config-question">
                  <div className="config-summary-tags">
                    <span className="config-summary-tag">
                      <small>Negocio</small>
                      <strong>{business}</strong>
                    </span>
                    <span className="config-summary-tag">
                      <small>Objetivo</small>
                      <strong>{goal}</strong>
                    </span>
                  </div>
                  <h3>Solución recomendada para tu negocio</h3>
                  <p>Según tu rubro y objetivo, esta es la ruta con mayor impacto y retorno:</p>
                </div>

                <div className="config-recommendation-card">
                  <div className="rec-card-top">
                    <span className="rec-badge">
                      <Icon name="spark" size={14} /> Solución sugerida
                    </span>
                    {activeRecommendation?.badge && (
                      <span className="rec-highlight-tag">
                        {activeRecommendation.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="rec-title">
                    {activeRecommendation?.solution || recommendedSolution}
                  </h4>
                  <p className="rec-desc">{activeRecommendation?.explanation}</p>

                  <div className="rec-actions">
                    <a
                      href={buildConfigWhatsAppUrl(
                        business,
                        goal,
                        activeRecommendation?.solution || recommendedSolution
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary config-cta-btn"
                      aria-label="Quiero esta solución por WhatsApp"
                    >
                      Quiero esta solución <Icon name="arrow" size={18} />
                    </a>
                    <button
                      type="button"
                      className="config-reset-btn"
                      onClick={handleResetConfig}
                    >
                      Modificar respuestas
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="services-section" id="servicios">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><div className="kicker">SOLUCIONES</div><h2>Tu negocio.<br/><span>También lo impulsamos.</span></h2></div>
            <p>No vendemos tecnología por venderla. Elegimos la combinación que reduce fricción, mejora tu presencia y acerca al cliente a una acción concreta.</p>
          </div>
          <div className="services-carousel-wrapper">
            <div className="services-nav-controls" aria-label="Controles del carrusel">
              <button
                type="button"
                className={`service-nav-btn nav-btn-left${serviceIndex === 0 ? " is-disabled" : ""}`}
                aria-label="Servicio anterior"
                aria-disabled={serviceIndex === 0}
                disabled={serviceIndex === 0}
                onClick={() => scrollService("left")}
              >
                <Icon name="chevron" size={20} />
              </button>
              <button
                type="button"
                className={`service-nav-btn nav-btn-right${serviceIndex === services.length - 1 ? " is-disabled" : ""}`}
                aria-label="Siguiente servicio"
                aria-disabled={serviceIndex === services.length - 1}
                disabled={serviceIndex === services.length - 1}
                onClick={() => scrollService("right")}
              >
                <Icon name="chevron" size={20} />
              </button>
            </div>

            <div
              className="services-track"
              ref={servicesRef}
              onScroll={updateCarouselState}
            >
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-number">0{index + 1}</div>
                  <div className="service-icon"><Icon name={service.icon} size={26}/></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-tag">{service.tag}</span>
                  <button onClick={() => scrollTo("contacto")}>Explorar <Icon name="chevron" size={15}/></button>
                </article>
              ))}
            </div>
          </div>

          <div className="services-dots" role="tablist" aria-label="Indicadores de servicios">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                role="tab"
                aria-selected={index === serviceIndex}
                className={`services-dot ${index === serviceIndex ? "active" : ""}`}
                onClick={() => scrollToService(index)}
                aria-label={`Ir al servicio ${index + 1}: ${service.title}`}
              >
                <span />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="inside-section">
        <div className="shell inside-grid">
          <div className="inside-copy">
            <div className="kicker light">LO QUE NO SE VE</div>
            <h2>Cambia todo.</h2>
            <p>Una buena solución digital no es solo “una página bonita”. Detrás hay experiencia, automatización, datos y un camino claro para que el cliente actúe.</p>
            <ul>
              <li><span><Icon name="shield" size={18}/></span><div><strong>Experiencia simple</strong><p>Menos pasos, menos dudas y más acciones completadas.</p></div></li>
              <li><span><Icon name="bolt" size={18}/></span><div><strong>Automatización útil</strong><p>Conexiones que eliminan tareas repetitivas del día a día.</p></div></li>
              <li><span><Icon name="spark" size={18}/></span><div><strong>IA con propósito</strong><p>Solo donde realmente mejora velocidad, atención o decisiones.</p></div></li>
            </ul>
          </div>
          <div className="system-visual" aria-label="Capas de una solución digital">
            <div className="system-halo" />
            <div className="layer layer-1"><span>CLIENTE</span><b>Visita · toca · escribe</b></div>
            <div className="layer layer-2"><span>EXPERIENCIA</span><b>Web · NFC · QR · WhatsApp</b></div>
            <div className="layer layer-3"><span>AUTOMATIZACIÓN</span><b>Datos · reglas · acciones</b></div>
            <div className="layer layer-4"><span>INTELIGENCIA</span><b>IA · seguimiento · mejora</b></div>
            <div className="system-node node-a"><i/>Captación</div>
            <div className="system-node node-b"><i/>Conversión</div>
            <div className="system-node node-c"><i/>Seguimiento</div>
          </div>
        </div>
      </section>

      <section className="process-section" id="como-funciona">
        <div className="shell">
          <div className="section-heading centered">
            <div className="kicker">CÓMO FUNCIONA</div>
            <h2>De idea a solución.<br/><span>Sin complicarte.</span></h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Conversemos", "Entendemos tu negocio, problema y objetivo real."],
              ["02", "Diseñamos", "Definimos la solución, contenido y experiencia."],
              ["03", "Construimos", "Desarrollamos, configuramos y probamos."],
              ["04", "Lanzamos", "Publicamos, medimos y dejamos todo listo para usar."],
            ].map(([num, title, text], index) => (
              <article className="process-step" key={num}>
                <div className="process-top"><span>{num}</span>{index < 3 && <i />}</div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="process-quote">
            <span className="quote-mark">“</span>
            <p>La mejor tecnología es la que tu cliente entiende sin que tengas que explicarla.</p>
            <div><span className="brand-mini"><Icon name="spark" size={15}/></span><strong>IMPULSATECH</strong><small>Soluciones digitales para negocios</small></div>
          </div>
        </div>
      </section>

      <section className="cases-section" id="casos">
        <div className="shell">
          <div className="section-heading split-heading case-heading">
            <div><div className="kicker">CASOS REALES</div><h2>Hecho para negocios<br/><span>de verdad.</span></h2></div>
            <p>Ejemplos de soluciones aplicadas a negocios locales. La versión final puede mostrar tus fotos y métricas reales.</p>
          </div>
          <div className="cases-grid">
            {cases.map((item) => (
              <article key={item.name} className={`case-card ${item.className}`}>
                <div className="case-art"><span>{item.glyph}</span><div className="case-phone"><div/><div/><div/></div></div>
                <div className="case-body"><small>{item.category}</small><h3>{item.name}</h3><p>{item.metric}</p><button onClick={() => scrollTo("contacto")}><Icon name="arrow" size={17}/></button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <div className="kicker light">HABLEMOS</div>
            <h2>¿Listo para impulsar<br/>tu negocio?</h2>
            <p>Cuéntanos qué quieres mejorar. Te respondemos con una propuesta clara, sin vueltas y aterrizada a tu realidad.</p>
            <div className="contact-features"><span><Icon name="check" size={16}/> Diagnóstico inicial</span><span><Icon name="check" size={16}/> Propuesta a medida</span><span><Icon name="check" size={16}/> Implementación acompañada</span></div>
          </div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            {submitted ? (
              <div className="success-state"><span><Icon name="check" size={30}/></span><h3>Mensaje preparado.</h3><p>En la versión publicada conectaremos este formulario con WhatsApp, correo o tu CRM.</p><button type="button" className="btn btn-primary" onClick={() => setSubmitted(false)}>Enviar otro</button></div>
            ) : (
              <>
                <label>Nombre<input required placeholder="Tu nombre" /></label>
                <label>Negocio<input required placeholder="Nombre de tu negocio" /></label>
                <label>¿Qué necesitas?<select defaultValue=""><option value="" disabled>Selecciona una opción</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select></label>
                <label>Cuéntanos brevemente<textarea rows={4} placeholder="Ej. Quiero conseguir más reseñas y recibir consultas por WhatsApp..." /></label>
                <button className="btn btn-primary full" type="submit">Quiero una propuesta <Icon name="arrow" size={18}/></button>
                <small className="form-note">Sin spam. Tus datos solo se usarán para responder tu consulta.</small>
              </>
            )}
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div><Brand/><p>Tecnología práctica para negocios que quieren crecer.</p></div>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#como-funciona">Proceso</a>
            <a href="#casos">Casos</a>
            <a href="#contacto">Contacto</a>
            <a href="https://www.instagram.com/impulsatech.pee/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61594748236941" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@impulsatech.pe" target="_blank" rel="noreferrer">TikTok</a>
          </div>
          <div className="footer-note"><span>© 2026 IMPULSATECH</span><span>Ica, Perú · Atención remota</span></div>
        </div>
      </footer>

      <a
        href={buildFloatingWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar a IMPULSATECH por WhatsApp"
      >
        <span className="whatsapp-float-icon">
          <WhatsAppIcon size={24} />
        </span>
        <span className="whatsapp-float-text">WhatsApp</span>
      </a>
    </main>
  );
}
