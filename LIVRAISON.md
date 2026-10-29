# Vendre avant d'acheter… ou acheter avant de vendre ?

App one-page de qualification de leads pour **Jimmy Beaulieu**, courtier
immobilier résidentiel RE/MAX à Lachine (Montréal). Clonée de l'architecture
`vente-ou-achat-maxbacon`. Next.js 15 (App Router, TS) · Tailwind v4 ·
Framer Motion · déploiement Vercel. Thème **bleu / blanc / rouge foncé**
(RE/MAX), mobile-first, français (tutoiement).

## Concept

Le logiciel ne donne jamais un chiffre : il recommande une **stratégie**
(vendre avant d'acheter / acheter avant de vendre / coordonner les deux en
parallèle), déterminée par un scoring bipolaire (`lib/scoring.ts`, -100 à
+100) basé sur les 3 facteurs financiers qui comptent vraiment (besoin de
l'argent de la vente, capacité à porter deux hypothèques, économies
indépendantes), affinés par le statut de mise en vente, la préapprobation,
l'équité accumulée et la priorité de la personne.

## Parcours (machine à états, un seul écran)

`hero → formulaire (15 à 16 questions selon le parcours, 5 étapes) → chargement (~2 s, IA) → résultats`

- 5 étapes : Ton projet → Ta propriété actuelle → Ton prochain achat → Ta
  situation financière → Tes priorités, puis coordonnées (nom/courriel/tél.).
- Auto-avance sur les choix (~220 ms). Barre de progression, bouton Précédent,
  transitions slide.
- Ville actuelle = champ de recherche filtrée (insensible aux accents/casse)
  + saisie libre, jamais de « pas trouvé ».
- Blocage légal si la propriété est déjà en vente **avec un courtier** —
  sauf si la personne indique vouloir changer.
- Les coordonnées sont collectées À LA FIN du formulaire — le lead est soumis
  au CRM en même temps que le calcul, pas après un volet séparé.
- `/api/analyze` : rapport via Claude (repli déterministe sans clé) — le
  verdict n'est jamais décidé par l'IA, seulement mis en mots.
- `/api/lead` : webhook CRM (GHL), payload aplati.

## Ce qui reste à faire pour ce déploiement

1. **Logo de Jimmy Beaulieu** — `public/jimmy-beaulieu-logo.svg` est un
   placeholder texte (JIMMY / BEAULIEU) en attendant son vrai logo. Dès
   réception : soit remplacer ce fichier par le logo réel (même nom), soit
   changer `logos.team` dans `lib/brand.ts` pour pointer vers le nouveau
   fichier.
2. **Photo du secteur** — `components/HeroBackground.tsx` utilise pour
   l'instant un dégradé bleu + une silhouette SVG générique d'horizon urbain
   (pas de vraie photo de Lachine/Montréal). À remplacer par une photo locale
   (ex. le canal de Lachine) en suivant le modèle utilisé dans les autres
   apps de la famille (`eglise-sainte-julie.jpg` chez Max Bacon).
3. **Photo du courtier** — `public/broker-1.svg` est un placeholder
   générique, à remplacer par une vraie photo de Jimmy Beaulieu.
4. **Meta Pixel** — vide par défaut dans `components/MetaPixel.tsx`
   (`PIXEL_ID`), à remplir au déploiement (jamais réutiliser l'ID d'une autre
   app).
5. **Clarity Project** — vide par défaut dans `components/Clarity.tsx`.

## Pour rebrander à un courtier précis — 4 endroits

1. **`lib/brand.ts`** — LE fichier central : nom, région/ville, textes du
   hero, le ou les courtiers, logos.
2. **`lib/regions.ts`** — la liste des villes/secteurs couverts (actuellement :
   Lachine et le Sud-Ouest / Ouest-de-l'Île de Montréal).
3. **`public/`** — `jimmy-beaulieu-logo.svg` (logo personnel, placeholder),
   `remax-logo-white.png` (logo RE/MAX officiel en blanc), `broker-1.svg`
   (placeholder photo courtier — à remplacer par une vraie photo).
4. **`.env.local`** (voir `.env.local.example`) — clés propres au déploiement :
   `ANTHROPIC_API_KEY`, `CRM_WEBHOOK_URL`, `NEXT_PUBLIC_SITE_URL`.

Meta Pixel et Clarity Project sont vides par défaut dans
`components/MetaPixel.tsx` / `components/Clarity.tsx` — à remplir au
déploiement (jamais réutiliser l'ID d'une autre app).

## Développement

```bash
npm install
cp .env.local.example .env.local   # remplir au besoin
npm run dev
```

## Déploiement Vercel

1. `git push` vers le repo GitHub du projet.
2. Sur vercel.com → New Project → importer ce repo (Next.js détecté
   automatiquement, aucune config requise).
3. Renseigner les variables d'environnement de `.env.local.example` dans
   Vercel → Settings → Environment Variables.
4. Déployer.
