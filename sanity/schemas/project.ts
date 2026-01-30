import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: '🚀 Mes Réalisations (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du Projet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL unique)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Création Web', value: 'Web' },
          { title: 'Publicité (Ads)', value: 'Ads' },
          { title: 'Stratégie Marketing', value: 'Stratégie' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Courte description (2 lignes max)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'link',
      title: 'Lien vers le projet (Optionnel)',
      type: 'url',
    }),
    defineField({
      name: 'content',
      title: 'Détails complets du projet (Texte Riche)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
})
