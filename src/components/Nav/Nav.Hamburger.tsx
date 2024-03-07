// import type { Variant } from 'framer-motion';
// import { motion, useCycle } from 'framer-motion';
// import { useCallback } from 'react';
// import tw, { styled, theme } from 'twin.macro';

// const HamburgerContainer = styled.div(tw`relative flex items-center gap-4 w-fit`);

// const HamburgerSvg = styled.svg.attrs({
//   width: '26',
//   height: '20',
//   viewBox: '0 0 26 20',
//   fill: 'none',
//   xmlns: 'http://www.w3.org/2000/svg',
// })(tw`cursor-pointer`);

// const pathVariant = (d: string): Variant => ({
//   d,
//   pathLength: [0, 1],
//   // opacity: [0.5, 1],
//   rotate: [90, 0],
//   // strokeWidth: [2, 26, 2],
//   transition: { duration: 0.6, type: 'spring' },
// });

// const HamburgerPath = styled(motion.path).attrs({
//   stroke: theme`colors.current`,
//   strokeWidth: '2',
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
// })<{ hidden?: boolean }>(({ hidden }) => (hidden ? tw`hidden` : {}));

// export default function Hamburger() {
//   const [icon, toggleIcon] = useCycle<'active' | 'inactive'>('inactive', 'active');

//   const toggleIconState = useCallback(() => {
//     toggleIcon();
//   }, [toggleIcon]);

//   return (
//     <HamburgerContainer>
//       <HamburgerSvg onClick={toggleIconState}>
//         <HamburgerPath
//           variants={{
//             inactive: pathVariant('M1 1.70752H25'),
//             active: pathVariant('M1.43799 18.8337L18.4086 1.86318'),
//           }}
//           initial={icon}
//           animate={icon}
//         />
//         <HamburgerPath hidden={icon === 'active'} d='M1 10.3484H25' />
//         <HamburgerPath
//           variants={{
//             inactive: pathVariant('M1 18.3484H25'),
//             active: pathVariant('M18.4086 18.8337L1.43801 1.86318'),
//           }}
//           initial={icon}
//           animate={icon}
//         />
//       </HamburgerSvg>
//     </HamburgerContainer>
//   );
// }
