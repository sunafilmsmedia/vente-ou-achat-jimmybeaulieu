"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

interface Props {
  onRestart: () => void;
}

// Écran affiché quand la personne a répondu "oui" à la question d'admissibilité
// (contrat de courtage déjà signé avec un autre courtier). On arrête le
// questionnaire immédiatement : aucune autre question, aucun rapport, aucun
// lead envoyé — la loi sur le courtage immobilier interdit de solliciter ou
// de représenter une personne déjà liée par un contrat exclusif ailleurs.
export default function DisqualifiedScreen({ onRestart }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 160, damping: 14 }}
          className="mx-auto mb-7 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/25 to-[var(--color-brand-500)]/15 border border-amber-500/40 flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(3,10,24,0.3)]"
        >
          <svg className="w-7 h-7 text-amber-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M10 6.5v4.5" strokeLinecap="round" />
            <path d="M10 14h.01" strokeLinecap="round" />
            <circle cx="10" cy="10" r="7.5" />
          </svg>
        </motion.div>

        <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-brand-300)] mb-3">
          Admissibilité
        </p>
        <h1 className="display-title text-[2rem] sm:text-5xl lg:text-6xl text-[var(--color-brand-100)] text-balance">
          On ne peut malheureusement pas t&apos;accompagner pour l&apos;instant.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed text-balance max-w-md mx-auto">
          La loi sur le courtage immobilier au Québec interdit à un courtier de
          représenter ou de solliciter une personne déjà liée par un contrat
          de courtage actif avec un autre courtier. Puisque tu as un contrat
          signé en cours, {BRAND.teamName} ne peut légalement pas intervenir
          dans ton dossier pour le moment.
        </p>
        <p className="mt-4 text-sm text-slate-500 leading-relaxed text-balance max-w-md mx-auto">
          Dès que ce contrat sera terminé, tu pourras revenir compléter ce
          questionnaire — ce sera un plaisir de t&apos;aider à ce moment.
        </p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onClick={onRestart}
          className="
            mt-10 inline-flex items-center gap-2
            px-6 py-3 rounded-full text-sm font-medium
            bg-white/[0.06] border border-[var(--color-slate-accent)]/25
            text-[var(--color-brand-100)]
            hover:bg-white/[0.1] hover:border-[var(--color-slate-accent)]/40
            transition-all
          "
        >
          Retour à l&apos;accueil
        </motion.button>
      </motion.div>
    </div>
  );
}
