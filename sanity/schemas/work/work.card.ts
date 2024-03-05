import { defineType } from 'sanity';

export default defineType({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'Image will be used as a thumbnail for the card on the home page and for the featured image on the featured page.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => [Rule.required(), Rule.max(150)],
      description: 'The description will be used as the description on the card',
    },
  ],
});
