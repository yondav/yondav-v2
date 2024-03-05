import { MdPerson as icon } from 'react-icons/md';
import { defineType } from 'sanity';

export { default as credentials } from './landing.credentials';

export default defineType({
  name: 'landing',
  title: 'Landing',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'credentials',
    },
  ],
});
