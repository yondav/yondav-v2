import { defineType } from 'sanity';

export default defineType({
  name: 'copyPageBlock',
  type: 'object',
  fields: [
    {
      name: 'copyBlock',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
