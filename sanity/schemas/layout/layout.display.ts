import { defineType } from 'sanity';

export default defineType({
  name: 'display',
  type: 'object',
  title: 'Display',
  description:
    'Style assigned to screen size within the current breakpoint will take precedence. If you wish to maintain the flex layout across subsequent breakpoints, you will need to mark flex as true for each breakpoint. Flex properties will then carry over unless overwritten within the current breakpoint.',
  fields: [
    {
      name: 'baseline',
      type: 'object',
      title: 'Default Layout',
      fields: [
        { name: 'gridCell', type: 'gridCell', title: 'Cell Dimensions' },
        { name: 'flex', type: 'flex', title: 'Flex' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'sm',
      type: 'object',
      title: 'Small Layout',
      fields: [
        { name: 'gridCell', type: 'gridCell', title: 'Cell Dimensions' },
        { name: 'flex', type: 'flex', title: 'Flex' },
      ],
    },
    {
      name: 'md',
      type: 'object',
      title: 'Medium Layout',
      fields: [
        { name: 'gridCell', type: 'gridCell', title: 'Cell Dimensions' },
        { name: 'flex', type: 'flex', title: 'Flex' },
      ],
    },
    {
      name: 'lg',
      type: 'object',
      title: 'Large Layout',
      fields: [
        { name: 'gridCell', type: 'gridCell', title: 'Cell Dimensions' },
        { name: 'flex', type: 'flex', title: 'Flex' },
      ],
    },
    {
      name: 'xl',
      type: 'object',
      title: 'Extra Large Layout',
      fields: [
        { name: 'gridCell', type: 'gridCell', title: 'Cell Dimensions' },
        { name: 'flex', type: 'flex', title: 'Flex' },
      ],
    },
  ],
});
