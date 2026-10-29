import type { Region } from "./types";

// ─────────────────────────────────────────────────────────────────────────
//  SECTEURS COUVERTS — Lachine et le Sud-Ouest / Ouest de Montréal.
//
//  Utilisé par les champs de recherche de ville/secteur :
//  - recherche insensible aux accents et à la casse
//  - si la ville tapée n'y figure pas, l'utilisateur peut toujours saisir
//    du texte libre (« Ajouter "…" ») — donc la liste n'a pas besoin d'être
//    exhaustive, mais couvrir toutes les municipalités du territoire améliore
//    l'expérience.
//  Aucune coordonnée (lat/lng) n'est requise : seul `name` est affiché.
// ─────────────────────────────────────────────────────────────────────────
export const REGIONS: Region[] = [
  // ── Lachine et ses quartiers ─────────────────────────────────────────────
  { id: "lachine", name: "Lachine" },
  { id: "saint-pierre", name: "Saint-Pierre (Lachine)" },
  { id: "dixie", name: "Dixie (Lachine)" },
  { id: "summerlea", name: "Summerlea (Lachine)" },
  { id: "fort-rolland", name: "Fort-Rolland (Lachine)" },
  { id: "highlands", name: "Highlands (Lachine)" },

  // ── Arrondissements voisins de Montréal ───────────────────────────────────
  { id: "lasalle", name: "LaSalle" },
  { id: "verdun", name: "Verdun" },
  { id: "ile-des-soeurs", name: "Île-des-Sœurs" },
  { id: "le-sud-ouest", name: "Le Sud-Ouest" },
  { id: "pointe-saint-charles", name: "Pointe-Saint-Charles" },
  { id: "ville-emard", name: "Ville-Émard" },
  { id: "cote-saint-luc", name: "Côte-Saint-Luc" },
  { id: "montreal-ouest", name: "Montréal-Ouest" },
  { id: "notre-dame-de-grace", name: "Notre-Dame-de-Grâce (NDG)" },
  { id: "ville-saint-laurent", name: "Ville Saint-Laurent" },

  // ── Ouest-de-l'Île ─────────────────────────────────────────────────────────
  { id: "dorval", name: "Dorval" },
  { id: "pointe-claire", name: "Pointe-Claire" },
  { id: "kirkland", name: "Kirkland" },
  { id: "beaconsfield", name: "Beaconsfield" },
  { id: "baie-durfe", name: "Baie-D'Urfé" },
  { id: "senneville", name: "Senneville" },
  { id: "sainte-anne-de-bellevue", name: "Sainte-Anne-de-Bellevue" },
  { id: "dollard-des-ormeaux", name: "Dollard-des-Ormeaux" },
];
