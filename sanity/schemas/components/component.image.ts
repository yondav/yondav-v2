import { defineType } from 'sanity';

export default defineType({
  name: 'imagePageBlock',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
    },
    // {
    //   name: 'figure',
    //   type: 'boolean',
    //   title: 'Do you want to make this image a figure with text?',
    // },
    // {
    //   name: 'copy',
    //   type: 'array',
    //   title: 'Copy',
    //   of: [{ type: 'block' }],
    //   hidden: ({ parent }) => !parent?.figure,
    // },
  ],
});
