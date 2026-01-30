import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: '⚙️ Paramètres Généraux (Contact & Réseaux)',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email de Contact',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Numéro de Téléphone (Affichage)',
      type: 'string',
    }),
    defineField({
      name: 'whatsappLink',
      title: 'Lien WhatsApp (ex: https://wa.me/...)',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Adresse Physique',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Lien Facebook',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Lien Instagram',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'Lien LinkedIn',
      type: 'url',
    }),
  ],
})