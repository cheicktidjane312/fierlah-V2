import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// Configuration directe
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// 1. Création du Client (Connexion)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // IMPORTANT : false pour voir les projets instantanément
});

// ... imports et client au dessus restent pareils ...

// 2. Création de l'outil Image
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForImage = (source: any) => {
  if (!source) return null;
  return imageBuilder.image(source);
};