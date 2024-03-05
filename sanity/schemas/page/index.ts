import { MdOutlineWeb as icon } from 'react-icons/md';
import { defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'protected',
      type: 'boolean',
      title: 'Is protected',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [{ type: 'pageBlock' }],
      title: 'Blocks',
    },
    {
      name: 'work',
      title: 'Work',
      type: 'reference',
      to: { type: 'work' },
    },
  ],
});
