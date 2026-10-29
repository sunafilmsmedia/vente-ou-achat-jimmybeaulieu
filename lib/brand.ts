// ─────────────────────────────────────────────────────────────────────────
//  CONFIG DE MARQUE — WHITE LABEL
//  Le SEUL fichier à éditer pour rebrander l'app à un nouveau client.
//  (+ lib/regions.ts pour la liste des secteurs, + les images dans /public,
//   + les variables d'environnement : voir .env.local.example)
//
//  Palette : bleu marine / blanc / or. Reprend les couleurs exactes de la
//  bannière RE/MAX Royal Jordan de Jimmy Beaulieu (navy #0c1341, or #dcb169).
//  Les couleurs se règlent dans app/globals.css (bloc @theme) — cherche les
//  variables --color-brand-* et --color-gold (nom hérité du template, porte
//  maintenant l'or, comme dans le vrai branding cette fois).
//
//  Branding : Jimmy Beaulieu, courtier immobilier résidentiel RE/MAX Royal
//  Jordan (Lachine, Montréal). Logo officiel RE/MAX Royal Jordan reçu
//  (public/remax-royal-jordan-logo.png). Logo personnel de Jimmy pas encore
//  reçu — logo d'équipe en texte temporaire (public/jimmy-beaulieu-logo.svg),
//  à remplacer dès réception.
// ─────────────────────────────────────────────────────────────────────────

export interface BrokerConfig {
  name: string;
  title: string;
  /** Chemin de la photo dans /public (ex. "/broker-1.jpg") */
  photo: string;
  /** Cadrage de la photo dans le rond du badge (ex. "50% 18%") */
  objectPosition: string;
  /** Téléphone affiché (ex. "514 000-0000") */
  phoneDisplay: string;
  /** Téléphone au format tel: (ex. "+15140000000") */
  phoneTel: string;
}

export interface BrandConfig {
  /** Identifiant court du déploiement — sert de "source" au CRM et de projet Clarity Scanner par défaut. */
  slug: string;

  /** Nom de l'équipe (affiché en filigrane dans le formulaire, le footer, le consentement). */
  teamName: string;

  /** Région / territoire couvert (textes marketing, rapport de repli, footer). */
  region: string;
  /** Ville centrale (utilisée dans les textes du rapport de repli). */
  city: string;

  /** Textes du hero. */
  hero: {
    chip: string;
    title: string;
    /** Segment exact du titre en rouge shimmer + police douce (serif italique). Optionnel. */
    titleHighlight?: string;
    /** Quelle occurrence de `titleHighlight` styler (1 = la première). Défaut : 1. */
    titleHighlightOccurrence?: number;
    /** Segment exact du titre en police douce rouge (serif italique). Optionnel. */
    titleSoft?: string;
    /** Quelle occurrence de `titleSoft` styler (1 = la première). Défaut : 1. */
    titleSoftOccurrence?: number;
    subtitle: string;
    signature: string; // "Boosté par l'IA"
    cta: string;
    ctaHint: string;
    scrollHint: string;
  };

  /** Logos fixes en haut (équipe à gauche, bannière à droite). */
  logos: {
    team: { src: string; alt: string; width: number; height: number };
    banner: { src: string; alt: string; width: number; height: number };
  };

  /** Courtier(s). Les noms servent aux textes du rapport (le badge flottant a été retiré). */
  brokers: BrokerConfig[];
}

export const BRAND: BrandConfig = {
  slug: "vente-ou-achat-jimmybeaulieu",

  teamName: "Jimmy Beaulieu",

  region: "Lachine et le Sud-Ouest de Montréal",
  city: "Lachine",

  hero: {
    chip: "Lachine · Montréal",
    title: "Vendre avant d'acheter… ou acheter avant de vendre ?",
    titleHighlight: "Vendre",
    titleSoft: "acheter",
    // La 2e occurrence : "ou acheter avant de vendre" — pas "d'acheter" au début.
    titleSoftOccurrence: 2,
    subtitle:
      "Découvre en 60 secondes quelle stratégie immobilière pourrait être la plus avantageuse selon ta situation.",
    signature: "Boosté par l'IA",
    cta: "Découvrir ma meilleure stratégie",
    ctaHint: "60 secondes — gratuit et confidentiel",
    scrollHint: "Confidentiel · Sans engagement",
  },

  logos: {
    team: {
      // Placeholder texte en attendant le vrai logo de Jimmy Beaulieu.
      src: "/jimmy-beaulieu-logo.svg",
      alt: "Jimmy Beaulieu — courtier immobilier résidentiel RE/MAX",
      width: 240,
      height: 64,
    },
    banner: {
      // Logo officiel RE/MAX Royal Jordan (version crème/transparente), directement sur le fond marine.
      src: "/remax-royal-jordan-logo.png",
      alt: "RE/MAX Royal Jordan — Agence immobilière",
      width: 280,
      height: 126,
    },
  },

  brokers: [
    {
      name: "Jimmy Beaulieu",
      title: "Courtier immobilier résidentiel · RE/MAX",
      photo: "/broker-1.svg",
      objectPosition: "50% 18%",
      phoneDisplay: "514 688-6675",
      phoneTel: "+15146886675",
    },
  ],
};

/** "Prénom ou Prénom" — utilisé dans les textes qui nomment l'équipe. */
export function brokersInlineNames(): string {
  const firsts = BRAND.brokers.map((b) => b.name.split(/\s+/)[0]).filter(Boolean);
  if (firsts.length === 0) return "un courtier";
  if (firsts.length === 1) return firsts[0];
  return `${firsts.slice(0, -1).join(", ")} ou ${firsts[firsts.length - 1]}`;
}
