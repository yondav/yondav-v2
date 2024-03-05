import { defineType } from 'sanity';

export default defineType({
  name: 'elements',
  title: 'Elements',
  type: 'array',
  of: [
    { type: 'imagePageBlock', title: 'Image' },
    // { type: 'galleryPageBlock', title: 'Gallery' },
    { type: 'copyPageBlock', title: 'Copy' },
  ],
});
