import { defineType } from 'sanity';

export default defineType({
  name: 'pageBlock',
  type: 'object',
  title: 'Page Block',
  fields: [
    {
      name: 'display',
      type: 'display',
      title: 'Display',
    },
    {
      name: 'elements',
      type: 'elements',
      title: 'Elements',
    },
  ],
});
