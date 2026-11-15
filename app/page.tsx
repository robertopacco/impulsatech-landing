"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import CursorFollower from "@/components/CursorFollower";

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
  | "shield"
  | "link"
  | "store";

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
    link: <><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/></>,
    store: <><path d="M3 10h18l-2-6H5l-2 6Z"/><path d="M5 10v10h14V10M9 20v-6h6v6"/><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></>,
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
  {
    icon: "nfc" as IconName,
    title: "NFC + QR",
    text: "Reseñas de Google y accesos instantáneos con solo acercar o escanear.",
    tag: "Tarjetas NFC + códigos QR",
    cta: "Quiero NFC + QR",
    waMessage: [
      "Hola IMPULSATECH",
      "",
      "Quisiera más información sobre tarjetas NFC y códigos QR para reseñas de Google y accesos rápidos.",
    ].join("\n"),
  },
  {
    icon: "link" as IconName,
    title: "Smart Links & Menús",
    text: "Todos los enlaces, menú o catálogo de tu negocio en un solo lugar.",
    tag: "Todo en un solo enlace",
    cta: "Quiero un Smart Link",
    waMessage: [
      "Hola IMPULSATECH",
      "",
      "Quisiera más información sobre Smart Links, menús o catálogos digitales para mi negocio.",
    ].join("\n"),
  },
  {
    icon: "web" as IconName,
    title: "Páginas Web",
    text: "Landing pages y sitios profesionales diseñados para convertir visitas en clientes.",
    tag: "Diseño + conversión",
    cta: "Quiero mi página web",
    waMessage: [
      "Hola IMPULSATECH",
      "",
      "Quisiera más información sobre una landing page o página web profesional para mi negocio.",
    ].join("\n"),
  },
  {
    icon: "chat" as IconName,
    title: "WhatsApp & Chatbots",
    text: "Atención más rápida, respuestas frecuentes y contacto directo con tus clientes.",
    tag: "Atención más ágil",
    cta: "Mejorar mi atención",
    waMessage: [
      "Hola IMPULSATECH",
      "",
      "Quisiera más información sobre WhatsApp y chatbots para atender mejor a mis clientes.",
    ].join("\n"),
  },
  {
    icon: "store" as IconName,
    title: "Sistemas para Negocios",
    text: "Ventas, reservas, stock, pedidos y gestión adaptados al rubro de tu negocio.",
    tag: "Gestión a tu medida",
    cta: "Quiero un sistema",
    waMessage: [
      "Hola IMPULSATECH",
      "",
      "Quisiera más información sobre un sistema de ventas, reservas, stock, pedidos o gestión para mi negocio.",
    ].join("\n"),
  },
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
] as const;

const goals = [
  "Conseguir más reseñas en Google",
  "Compartir menú, catálogo o enlaces",
  "Tener presencia profesional en internet",
  "Recibir y atender consultas por WhatsApp",
  "Gestionar ventas, reservas, stock o pedidos",
  "No estoy seguro, quiero asesoría",
] as const;

type BusinessType = (typeof businessTypes)[number];
type BusinessGoal = (typeof goals)[number];

interface RecommendationInfo {
  primarySolution: string;
  explanation: string;
  badge: string;
  optionalComplement?: string;
  advancedCapability?: string;
}

const recommendationsByGoal: Partial<Record<BusinessGoal, RecommendationInfo>> = {
  "Conseguir más reseñas en Google": {
    primarySolution: "NFC + QR",
    explanation:
      "Facilita que tus clientes lleguen a tu perfil de Google con un toque o escaneo y dejen una reseña sin pasos innecesarios.",
    badge: "Reputación rápida",
  },
  "Compartir menú, catálogo o enlaces": {
    primarySolution: "Smart Links & Menús",
    explanation:
      "Reúne tu menú, catálogo, redes y canales de contacto en un solo enlace fácil de compartir y actualizar.",
    badge: "Todo en un enlace",
  },
  "Tener presencia profesional en internet": {
    primarySolution: "Páginas Web",
    explanation:
      "Presenta tu negocio con una experiencia rápida, clara y profesional, diseñada para generar confianza y convertir visitas en oportunidades.",
    badge: "Presencia que convierte",
  },
  "Recibir y atender consultas por WhatsApp": {
    primarySolution: "WhatsApp & Chatbots",
    explanation:
      "Ordena la atención, agiliza respuestas frecuentes y crea un camino directo para convertir consultas en clientes.",
    badge: "Atención más ágil",
    advancedCapability:
      "Si el volumen de atención crece, podemos evaluar automatizaciones o IA.",
  },
  "Gestionar ventas, reservas, stock o pedidos": {
    primarySolution: "Sistemas para Negocios",
    explanation:
      "Centraliza las tareas clave de tu operación en una solución adaptada a la forma real en que trabaja tu negocio.",
    badge: "Gestión a tu medida",
  },
};

const uncertainRecommendations: Record<BusinessType, RecommendationInfo> = {
  "Restaurante / pollería": {
    primarySolution: "Smart Links & Menús",
    explanation: "Empieza con una carta digital clara, actualizable y fácil de compartir con tus clientes.",
    badge: "Inicio recomendado",
  },
  "Cafetería / pastelería": {
    primarySolution: "Smart Links & Menús",
    explanation: "Empieza reuniendo tu carta, productos, redes y contacto en un acceso digital fácil de compartir.",
    badge: "Inicio recomendado",
  },
  "Hotel / hospedaje": {
    primarySolution: "Páginas Web",
    explanation: "Empieza con una presencia profesional que muestre habitaciones, servicios y canales de reserva con claridad.",
    badge: "Inicio recomendado",
  },
  "Barbería / salón": {
    primarySolution: "WhatsApp & Chatbots",
    explanation: "Empieza ordenando consultas y solicitudes de citas para responder con mayor rapidez.",
    badge: "Inicio recomendado",
  },
  "Tienda / retail": {
    primarySolution: "Smart Links & Menús",
    explanation: "Empieza mostrando tu catálogo, promociones y canales de compra desde un solo enlace.",
    badge: "Inicio recomendado",
  },
  "Clínica / consultorio": {
    primarySolution: "WhatsApp & Chatbots",
    explanation: "Empieza facilitando consultas y solicitudes de citas con una atención más ordenada.",
    badge: "Inicio recomendado",
  },
  "Servicios profesionales": {
    primarySolution: "Páginas Web",
    explanation: "Empieza presentando tus servicios, experiencia y formas de contacto con una imagen profesional.",
    badge: "Inicio recomendado",
  },
  Otro: {
    primarySolution: "Diagnóstico personalizado",
    explanation: "Revisamos tu operación y definimos la ruta digital más simple y rentable para comenzar.",
    badge: "Asesoría a medida",
  },
};

const businessContexts: Record<BusinessType, string> = {
  "Restaurante / pollería": "La propuesta se adapta a la atención en mesa, los pedidos y las visitas recurrentes.",
  "Cafetería / pastelería": "La propuesta se adapta a productos visuales, cambios de carta y compras recurrentes.",
  "Hotel / hospedaje": "La propuesta considera consultas, reservas y la confianza previa a la estadía.",
  "Barbería / salón": "La propuesta considera consultas rápidas, citas y clientes recurrentes.",
  "Tienda / retail": "La propuesta se adapta a catálogo, promociones y operación comercial.",
  "Clínica / consultorio": "La propuesta considera una atención clara, ordenada y orientada a citas.",
  "Servicios profesionales": "La propuesta refuerza la confianza, la presentación del servicio y el contacto comercial.",
  Otro: "La propuesta se ajustará al flujo y las prioridades reales de tu negocio.",
};

const complementRules: Partial<Record<`${BusinessType}|${BusinessGoal}`, string>> = {
  "Restaurante / pollería|Compartir menú, catálogo o enlaces": "NFC + QR",
  "Cafetería / pastelería|Compartir menú, catálogo o enlaces": "NFC + QR",
  "Restaurante / pollería|Conseguir más reseñas en Google": "Smart Links & Menús",
  "Cafetería / pastelería|Conseguir más reseñas en Google": "Smart Links & Menús",
  "Hotel / hospedaje|Gestionar ventas, reservas, stock o pedidos": "Páginas Web",
  "Clínica / consultorio|Recibir y atender consultas por WhatsApp": "Sistema de citas",
  "Tienda / retail|Gestionar ventas, reservas, stock o pedidos": "Smart Links & Menús",
  "Servicios profesionales|Tener presencia profesional en internet": "WhatsApp & Chatbots",
};

function getRecommendation(
  businessType: BusinessType | "",
  businessGoal: BusinessGoal | ""
): RecommendationInfo {
  if (!businessType || !businessGoal) {
    return uncertainRecommendations.Otro;
  }

  const baseRecommendation =
    businessGoal === "No estoy seguro, quiero asesoría"
      ? uncertainRecommendations[businessType]
      : recommendationsByGoal[businessGoal] ?? uncertainRecommendations.Otro;
  const optionalComplement = complementRules[`${businessType}|${businessGoal}`];

  return {
    ...baseRecommendation,
    explanation: `${baseRecommendation.explanation} ${businessContexts[businessType]}`,
    optionalComplement,
  };
}

interface CaseItem {
  name: string;
  category: string;
  solution: string;
  headerCard: string;
  headerAlt: string;
  photo: string;
  photoAlt: string;
}

const cases: CaseItem[] = [
  {
    name: "Pastelarte Coffee Cat",
    category: "Cafetería · Ica",
    solution: "Tarjeta NFC para facilitar reseñas en Google.",
    headerCard: "/casos/logos/pastelarte-logo-card.png",
    headerAlt: "Cabecera de Pastelarte Coffee Cat",
    photo: "/casos/pastelarte/pastelarte-propietario-real.webp",
    photoAlt: "Entrega real de tarjeta NFC en Pastelarte Coffee Cat",
  },
  {
    name: "Pollería Misky",
    category: "Restaurante · Ica",
    solution: "QR A4 + NFC para facilitar el acceso a reseñas de Google.",
    headerCard: "/casos/logos/misky-logo-card.png",
    headerAlt: "Cabecera de Pollería Misky",
    photo: "/casos/misky/misky-propietaria-real.webp",
    photoAlt: "Entrega real de soporte QR A4 y NFC en Pollería Misky",
  },
  {
    name: "El Sol de Luren",
    category: "Hospedaje · Ica",
    solution: "Tarjeta / banner NFC personalizado para facilitar reseñas de Google.",
    headerCard: "/casos/logos/sol-de-luren-logo-card.png",
    headerAlt: "Cabecera de Hospedaje El Sol de Luren",
    photo: "/casos/hospedaje-sol-luren/hospedaje-sol-luren-propietario-real.webp",
    photoAlt: "Entrega real de solución NFC en Hospedaje El Sol de Luren",
  },
];
function HeaderBrand() {
  return (
    <a className="brand-header" href="#inicio" aria-label="IMPULSATECH inicio">
      <Image
        src="/marca/impulsatech-logo-horizontal-final-1000.png"
        alt="IMPULSATECH"
        width={1000}
        height={134}
        className="brand-logo-header"
        style={{ objectFit: "contain", objectPosition: "left center" }}
        priority
      />
    </a>
  );
}

function FooterBrand() {
  return (
    <a className="brand-footer" href="#inicio" aria-label="IMPULSATECH inicio">
      <Image
        src="/marca/impulsatech-logo-blanco.png"
        alt="IMPULSATECH"
        width={1400}
        height={373}
        className="brand-logo-footer"
        style={{ objectFit: "contain", objectPosition: "center left" }}
        loading="lazy"
      />
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
  primarySolution: string,
  optionalComplement?: string
) {
  const biz = businessType || "mi negocio";
  const g = businessGoal || "crecer";
  const solution = primarySolution || "soluciones digitales";

  const message = [
    "Hola IMPULSATECH",
    "",
    `Tengo un negocio de ${biz}.`,
    "",
    "Quiero mejorar:",
    g,
    "",
    "La web me recomendó:",
    `${solution}.`,
  ];

  if (optionalComplement) {
    message.push(
      "",
      "También podría complementarlo con:",
      `${optionalComplement}.`
    );
  }

  message.push("", "Quisiera recibir más información y una cotización.");

  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message.join("\n"))}`;
}

function buildFloatingWhatsAppUrl() {
  const message = [
    "Hola IMPULSATECH",
    "",
    "Vi su página web y quisiera conocer más sobre sus soluciones digitales.",
  ].join("\n");
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

function buildServiceWhatsAppUrl(waMessage: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMessage)}`;
}

function buildCaseWhatsAppUrl(caseName: string) {
  const message = [
    "Hola IMPULSATECH",
    "",
    `Vi el caso de ${caseName} y quisiera implementar algo similar en mi negocio.`,
  ].join("\n");
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [configStep, setConfigStep] = useState(1);
  const [business, setBusiness] = useState<BusinessType | "">("");
  const [goal, setGoal] = useState<BusinessGoal | "">("");
  const [submitted, setSubmitted] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);

  const activeRecommendation = useMemo(
    () => getRecommendation(business, goal),
    [business, goal]
  );

  const handleSelectBusiness = (item: BusinessType) => {
    setBusiness(item);
    setGoal("");
    setConfigStep(2);
  };

  const handleSelectGoal = (item: BusinessGoal) => {
    setGoal(item);
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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = ["inicio", "configurador", "servicios", "como-funciona", "casos", "contacto"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <CursorFollower />
      <header className="site-header">
        <div className="shell nav-shell">
          <HeaderBrand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios" className={activeSection === "servicios" ? "is-active" : ""}>Servicios</a>
            <a href="#como-funciona" className={activeSection === "como-funciona" ? "is-active" : ""}>Cómo funciona</a>
            <a href="#casos" className={activeSection === "casos" ? "is-active" : ""}>Casos reales</a>
            <a href="#contacto" className={activeSection === "contacto" ? "is-active" : ""}>Contacto</a>
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

      {/* PRUEBA SOCIAL */}
      <section className="social-proof-strip" aria-label="Negocios con soluciones implementadas">
        <div className="shell social-proof-shell">
          <div className="social-proof-header">
            <p className="social-proof-label">SOLUCIONES IMPLEMENTADAS EN NEGOCIOS DE ICA</p>
          </div>
          <div className="social-proof-logos">
            <div className="proof-logo-item" title="Pastelarte Coffee Cat">
              <Image
                src="/casos/logos/pastelarte-logo-real.png"
                alt="Pastelarte Coffee Cat"
                width={140}
                height={140}
                className="proof-logo-img"
              />
            </div>
            <div className="proof-logo-item" title="Pollería Misky">
              <Image
                src="/casos/logos/misky-logo-real.png"
                alt="Pollería Misky"
                width={140}
                height={140}
                className="proof-logo-img"
              />
            </div>
            <div className="proof-logo-item" title="El Sol de Luren">
              <Image
                src="/casos/logos/sol-de-luren-logo-real.png"
                alt="El Sol de Luren"
                width={140}
                height={140}
                className="proof-logo-img"
              />
            </div>
          </div>
          <a href="#casos" className="proof-cases-link" aria-label="Ver casos reales">
            Ver casos reales <Icon name="arrow" size={14} />
          </a>
        </div>
      </section>

      <section className="config-section" id="configurador">
        <div className="shell config-grid">
          <div className="section-intro">
            <div className="kicker">ELIGE TU OPORTUNIDAD</div>
            <h2>Tu negocio merece<br/><span>otra oportunidad.</span></h2>
            <p>Cuéntanos qué tienes y qué quieres lograr. Te mostramos una ruta inicial sin tecnicismos.</p>
            <div className="local-chip"><Icon name="pin" size={17}/> Atención presencial en Ica y atención por WhatsApp para todo el Perú</div>
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
                    {activeRecommendation.badge && (
                      <span className="rec-highlight-tag">
                        {activeRecommendation.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="rec-title">{activeRecommendation.primarySolution}</h4>
                  <p className="rec-desc">{activeRecommendation.explanation}</p>

                  {activeRecommendation.optionalComplement && (
                    <p className="rec-complement">
                      <span>También podrías complementarlo con:</span>
                      <strong>{activeRecommendation.optionalComplement}</strong>
                    </p>
                  )}

                  {activeRecommendation.advancedCapability && (
                    <p className="rec-advanced">
                      {activeRecommendation.advancedCapability}
                    </p>
                  )}

                  <div className="rec-actions">
                    <a
                      href={buildConfigWhatsAppUrl(
                        business,
                        goal,
                        activeRecommendation.primarySolution,
                        activeRecommendation.optionalComplement
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
                  <a
                    href={buildServiceWhatsAppUrl(service.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta-link"
                    aria-label={`${service.cta} por WhatsApp`}
                  >
                    <span>{service.cta}</span>
                    <Icon name="arrow" size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="services-dots" role="group" aria-label="Navegación de servicios">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                aria-current={index === serviceIndex ? "true" : undefined}
                className={`services-dot ${index === serviceIndex ? "active" : ""}`}
                onClick={() => scrollToService(index)}
                aria-label={`Ir al servicio ${service.title}`}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
          <p className="services-advanced">
            También desarrollamos soluciones avanzadas: Automatizaciones <span aria-hidden="true">·</span> Integraciones <span aria-hidden="true">·</span> Inteligencia Artificial
          </p>
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
          <div className="process-heading">
            <div>
              <div className="kicker">CÓMO TRABAJAMOS</div>
              <h2>De tu idea a una<br/><span>solución funcionando.</span></h2>
            </div>
            <p>Nos cuentas qué necesita tu negocio y nosotros nos encargamos de convertirlo en una solución simple, funcional y lista para usar.</p>
          </div>
          <div className="process-flow">
            <ol className="process-grid" aria-label="Nuestro proceso de trabajo">
              {[
                ["01", "chat", "Cuéntanos qué necesitas", "Conocemos tu negocio, tu objetivo y el problema que quieres resolver."],
                ["02", "spark", "Diseñamos la solución", "Definimos la opción más simple y efectiva para tu negocio y presupuesto."],
                ["03", "check", "Implementamos y probamos", "Configuramos, desarrollamos y validamos la solución antes de entregarla."],
                ["04", "shield", "Te acompañamos", "Te explicamos cómo usarla y seguimos disponibles para mejoras o soporte."],
              ].map(([num, icon, title, text]) => (
                <li className="process-step" key={num}>
                  <div className="process-step-top">
                    <span className="process-number">{num}</span>
                    <span className="process-icon"><Icon name={icon as IconName} size={20}/></span>
                  </div>
                  <div className="process-copy">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="cases-section" id="casos">
        <div className="shell">
          <div className="section-heading split-heading case-heading">
            <div><div className="kicker">CASOS REALES</div><h2>Hecho para negocios<br/><span>de verdad.</span></h2></div>
            <p>Soluciones aplicadas a negocios locales para facilitar reseñas en Google y conectar con sus clientes.</p>
          </div>
          <div className="cases-grid">
            {cases.map((item) => (
              <article key={item.name} className="case-card">
                {/* CABECERA SUPERIOR */}
                <div className="case-header-card">
                  <Image
                    src={item.headerCard}
                    alt={item.headerAlt}
                    fill
                    sizes="(max-width: 820px) 100vw, 380px"
                    className="case-header-img"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    loading="lazy"
                  />
                </div>

                {/* BODY */}
                <div className="case-body">
                  <small>{item.category}</small>
                  <h3>{item.name}</h3>
                  <p className="case-solution">{item.solution}</p>

                  {/* FOTO REAL PROPIETARIO / ENTREGA */}
                  <div className="case-photo-wrapper">
                    <Image
                      src={item.photo}
                      alt={item.photoAlt}
                      fill
                      sizes="(max-width: 820px) 90vw, 380px"
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      loading="lazy"
                    />
                  </div>

                  {/* CTA */}
                  <a
                    href={buildCaseWhatsAppUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-cta-btn"
                    aria-label={`Quiero algo similar a ${item.name} por WhatsApp`}
                  >
                    <span>Quiero algo similar</span>
                    <Icon name="arrow" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="shell">
          <div className="trust-card">
            <div className="trust-info-col">
              <div className="trust-badge">
                <Icon name="shield" size={15} /> CONFIANZA LOCAL
              </div>
              <h2>Tecnología con atención humana.</h2>
              <p className="trust-text">
                IMPULSATECH nace en Ica para ayudar a negocios a aprovechar herramientas digitales de forma simple, práctica y cercana.
              </p>
              <div className="trust-location-tag">
                <Icon name="pin" size={15} />
                <span>Atención presencial en Ica y atención por WhatsApp para todo el Perú.</span>
              </div>
              <div className="trust-signature">
                <strong>Roberto Pacco</strong>
                <span>Fundador · Ingeniero de Sistemas</span>
              </div>
            </div>

            <div className="trust-photo-col">
              <div className="trust-photo-frame">
                <Image
                  src="/marca/roberto-pacco-titulo.jpg"
                  alt="Roberto Pacco - Fundador e Ingeniero de Sistemas de IMPULSATECH"
                  width={794}
                  height={1007}
                  className="trust-photo-img"
                  sizes="(max-width: 820px) 90vw, 380px"
                  priority={false}
                />
              </div>
            </div>
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
          <div><FooterBrand/><p>Tecnología práctica para negocios que quieren crecer.</p></div>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#como-funciona">Proceso</a>
            <a href="#casos">Casos</a>
            <a href="#contacto">Contacto</a>
            <a href="https://www.instagram.com/impulsatech.pee/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de IMPULSATECH">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61594748236941" target="_blank" rel="noopener noreferrer" aria-label="Facebook de IMPULSATECH">Facebook</a>
            <a href="https://www.tiktok.com/@impulsatech.pe" target="_blank" rel="noopener noreferrer" aria-label="TikTok de IMPULSATECH">TikTok</a>
          </div>
          <div className="footer-note"><span>© 2026 IMPULSATECH</span><span>Atención presencial en Ica y por WhatsApp para todo el Perú</span></div>
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
