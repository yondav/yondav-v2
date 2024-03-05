import { defineType } from 'sanity';

export default defineType({
  name: 'gridCell',
  type: 'object',
  title: 'Grid Cell',
  fields: [
    {
      name: 'colStart',
      type: 'column',
      title: 'starting column',
      validation: Rule => Rule.required(),
    },
    {
      name: 'colEnd',
      type: 'column',
      title: 'ending column',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rowStart',
      type: 'row',
      title: 'starting row',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rowEnd',
      type: 'row',
      title: 'ending row',
      validation: Rule => Rule.required(),
    },
  ],
});
