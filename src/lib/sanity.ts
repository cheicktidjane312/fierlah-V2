import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// Configuration (Avec vos valeurs par défaut)
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tuk8a6na";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// 1. Création du Client (Connexion)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // false = Données toujours fraîches (utile en dév)
});

// 2. Création du Builder d'Image
// On passe le client directement, c'est plus sûr
const builder = createImageUrlBuilder(client);

// 3. Fonction Helper Sécurisée pour les Images
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForImage = (source: any) => {
  // SÉCURITÉ MAXIMALE : 
  // Si la source est vide OU si elle n'a pas de propriété 'asset', on retourne null.
  // Cela empêche l'écran blanc "Internal Server Error".
  if (!source || !source.asset) {
    return null;
  }

  return builder.image(source);
};