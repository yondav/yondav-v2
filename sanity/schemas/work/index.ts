import { MdApps as icon } from 'react-icons/md';
import { defineType } from 'sanity';

export { default as workCard } from './work.card';

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Title will be used to generate a url and to label the card on the home page. It will also be used as the title on the featured page.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Link to figma or equivalent platform',
    },
    {
      name: 'card',
      title: 'Card',
      type: 'card',
    },
    // {
    //   name: 'page',
    //   title: 'Page',
    //   type: 'reference',
    //   to: { type: 'page'}
    // }
  ],
});
