import { type SchemaTypeDefinition } from 'sanity'
import settings from './schemas/settings'
import project from './schemas/project' // <-- Importez le nouveau schéma
import post from './schemas/post' // <-- Importez post
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, project, post], // <-- Ajoutez post
}
