import { motion, type Variants } from 'framer-motion';
import { styled, theme } from 'twin.macro';

export default function Stripes() {
  return (
    <g id='stripes'>
      <motion.path
        animate={{
          filter: ['saturate(0)', 'saturate(120%)', 'saturate(100%)'],
          transition: { duration: 3 },
        }}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M610.383 727.645H0V788.11H571.033C664.922 788.11 741.033 864.221 741.033 958.11V1150L0 1150H860.382V977.645C860.382 839.573 748.454 727.645 610.383 727.645Z'
        fill='#529C96'
      />
      <motion.path
        animate={{
          filter: ['saturate(0)', 'saturate(120%)', 'saturate(100%)'],
          transition: { duration: 3 },
        }}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M696.734 641.096H0V700.23H627.385C787.547 700.23 917.385 830.067 917.385 990.23V1150L1036.73 1150V981.096C1036.73 793.32 884.511 641.096 696.734 641.096Z'
        fill='#8A3A38'
      />
      <motion.path
        animate={{
          filter: ['saturate(0)', 'saturate(120%)', 'saturate(100%)'],
          transition: { duration: 3 },
        }}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M776.648 554.548H0V613.38H715.518C925.386 613.38 1095.52 783.512 1095.52 993.38V1150L1216.65 1150V994.548C1216.65 751.543 1019.65 554.548 776.648 554.548Z'
        fill='#7D5C28'
      />
      <motion.path
        animate={{
          filter: ['saturate(0)', 'saturate(120%)', 'saturate(100%)'],
          transition: { duration: 3 },
        }}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M863 468H0V526.609H795.432C1060.53 526.609 1275.43 741.513 1275.43 1006.61V1150H1393V998C1393 705.289 1155.71 468 863 468Z'
        fill='#CE9D4D'
      />
    </g>
  );
}
