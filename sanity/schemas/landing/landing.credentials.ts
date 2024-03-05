import { defineType } from 'sanity';

export default defineType({
  title: 'Credentials',
  name: 'credentials',
  type: 'object',
  fields: [
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
    },
    {
      name: 'readout',
      title: 'Portfolio Readout',
      type: 'file',
    },
  ],
});
