import { defineType } from 'sanity';

export default defineType({
  name: 'column',
  type: 'number',
  title: 'Column',
  // description:
  //   'All column spans will be 12 for mobile layout, making it so all blocks are stacked on smaller screens',
  options: {
    list: Array.from({ length: 13 }, (value, index) => index + 1).map(col => ({
      title: col.toString(),
      value: col,
    })),
  },
});
