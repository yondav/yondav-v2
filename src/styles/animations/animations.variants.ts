import type { Variants } from 'framer-motion';

export const fade = (config = { from: 0, to: 1 }): Variants => ({
  hidden: { opacity: config.from },
  visible: { opacity: config.to },
});

export function parallax(
  config = {
    opacity: { from: 0.3, to: 1 },
    scale: { from: 1.007, to: 1 },
    translateY: { from: -8, to: 0 },
  }
): Variants {
  return {
    hidden: {
      opacity: config.opacity.from,
      filter: 'blur(2px)',
      transform: `translateY(${config.translateY.from}px)`,
    },
    visible: {
      opacity: config.opacity.to,
      scale: [config.scale.from, config.scale.to],
      filter: 'blur(0)',
      transform: `translateY(${config.translateY.to}px)`,
    },
  };
}

export const swipe = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
