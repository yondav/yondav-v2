import { defineType } from 'sanity';

export default defineType({
  name: 'flex',
  type: 'object',
  title: 'Flex',
  // description:
  //   'All column spans will be 12 for mobile layout, making it so all blocks are stacked on smaller screens',
  fields: [
    {
      name: 'flex',
      type: 'boolean',
      title: 'Flex',
    },
    {
      name: 'orientation',
      type: 'string',
      title: 'Flex Orientation',
      options: {
        list: [
          { title: 'Column', value: 'column' },
          { title: 'Reverse Column', value: 'column-reverse' },
          { title: 'Row', value: 'row' },
          { title: 'Reverse Row', value: 'row-reverse' },
        ],
      },
      hidden: ({ parent }) => !parent?.flex,
    },
    {
      name: 'justify',
      type: 'string',
      title: 'Justify Content',
      options: {
        list: [
          { title: 'Space Between', value: 'space-between' },
          { title: 'Center', value: 'center' },
          { title: 'Flex End', value: 'flex-end' },
          { title: 'Space Evenly ', value: 'space-evenly' },
          { title: 'Space Around ', value: 'space-around' },
          { title: 'Flex Start ', value: 'flex-start' },
        ],
      },
      hidden: ({ parent }) => !parent?.flex,
    },
    {
      name: 'align',
      type: 'string',
      title: 'Align Items',
      options: {
        list: [
          { title: 'Baseline', value: 'baseline' },
          { title: 'Center', value: 'center' },
          { title: 'Flex End', value: 'flex-end' },
          { title: 'Stretch ', value: 'stretch' },
          { title: 'Flex Start ', value: 'flex-start' },
        ],
      },
      hidden: ({ parent }) => !parent?.flex,
    },
  ],
  // list: [
  //   {title: 'Flex', value: 'flex'},
  //   {title: 'Grid', value: 'grid'},
  // ]
});
