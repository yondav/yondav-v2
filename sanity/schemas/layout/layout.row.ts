import { defineType } from 'sanity';

export default defineType({
  name: 'row',
  type: 'number',
  title: 'Row',
  // description:
  //   'All column spans will be 12 for mobile layout, making it so all blocks are stacked on smaller screens',
  options: {
    list: Array.from({ length: 19 }, (value, index) => index + 1).map(row => ({
      title: row.toString(),
      value: row,
    })),
  },
});
