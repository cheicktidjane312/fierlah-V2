import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: '📰 Articles de Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\'article',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),RF RGR OIZ BRUR JRHI IYR 
    defineField({
      name: 'mainImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait (pour la carte)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Contenu de l\'article',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }], // Permet texte riche + images
    }),
  ],
})