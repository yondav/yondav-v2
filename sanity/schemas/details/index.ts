import { RiListUnordered as icon } from 'react-icons/ri';
import { defineType } from 'sanity';

export default defineType({
  name: 'details',
  title: 'Details',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
