import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useCallback, useMemo } from 'react';
import { MdOutlineFormatPaint, MdOutlineSettingsBackupRestore } from 'react-icons/md';
import {
  RiTShirt2Line,
  RiSave2Line,
  RiShuffleFill,
  RiPaletteFill,
  RiContrastFill,
} from 'react-icons/ri';
import { VscJson } from 'react-icons/vsc';
import tw, { styled, theme } from 'twin.macro';

import { Portrait, UiTheme } from '../../contexts';
import { useMediaQuery } from '../../hooks';

import ActionButton from './Portrait.ActionButton';

const PlaygroundMenuIndicatorContainer = styled(motion.div)(() => [
  tw`w-fit p-4 absolute left-1/2 -translate-x-1/2 z-50 cursor-pointer transition-all`,

  // active === 'active' ? tw`bottom-24` : tw`bottom-8`,
]);

const PlaygroundMenuIndicator = styled(motion.div).attrs({
  variants: {
    inactive: { width: theme`width.40` },
    active: { width: theme`width.80` },
    transition: { duration: 0.1, type: 'spring' },
  },
})(
  tw`h-0.5 bg-neutral-500 rounded-full shadow-2xl shadow-bg transition-all hover:(brightness-150 scale-x-105 shadow-2xl shadow-neutral-50)`
);

const PlaygroundMenu = styled(motion.div).attrs({
  initial: { bottom: '-5rem' },
  animate: { bottom: '2rem' },
  exit: { bottom: '-5rem' },
})(
  tw`bg-gradient-to-b from-neutral-100 to-neutral-50 rounded-full flex absolute left-1/2 -translate-x-1/2 bottom-16 z-50`
);

export default function PortraitMenu() {
  const [active, toggleActive] = useCycle<'active' | 'inactive'>('active', 'inactive');

  const toggleActiveState = useCallback(() => {
    toggleActive();
  }, [toggleActive]);

  const { dispatch } = Portrait.usePortraitContext();
  const { setter, color, contrast } = UiTheme.useThemeContext();

  const notMobile = useMediaQuery(`(min-width: ${theme`screens.md`})`);

  const handleContrast = useCallback(() => {
    setter({
      contrast:
        contrast === UiTheme.CONTRASTTHEME.DARK
          ? UiTheme.CONTRASTTHEME.LIGHT
          : UiTheme.CONTRASTTHEME.DARK,
    });
  }, [contrast, setter]);

  const themes = useMemo(
    () => Object.entries(UiTheme.themeColorTitles) as Array<[UiTheme.ColorTheme, string]>,
    []
  );

  const currentTheme = useMemo(() => {
    const currentValue = themes.find(([k]) => k === color);
    const currentThemeIndex = currentValue ? themes.indexOf(currentValue) : 0;
    return { currentValue, currentThemeIndex };
  }, [color, themes]);

  const handleTheme = useCallback(() => {
    const { currentThemeIndex } = currentTheme;
    const nextTheme =
      currentThemeIndex === themes.length - 1 ? themes[0] : themes[currentThemeIndex + 1];

    setter({ color: nextTheme[0] });
  }, [currentTheme, setter, themes]);

  const handleDispatch = useCallback(
    (actions: Array<Portrait.PortraitActions>) => {
      actions.forEach(act => {
        dispatch(act);
      });
    },
    [dispatch]
  );

  const iconSize = useMemo(() => (notMobile ? '1.5rem' : '1rem'), [notMobile]);

  return (
    <>
      <PlaygroundMenuIndicatorContainer
        // active={active}
        onClick={toggleActiveState}
        variants={{
          active: {
            bottom: [92, 90, 94, 90],
            transition: {
              bottom: {
                duration: 0.3,
              },
            },
          },
          inactive: {
            // filter: ['brightness(1)', 'brightness(2)'],
            bottom: [32, 30, 34, 30],
            transition: {
              filter: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: 'mirror',
              },
              bottom: { repeat: Infinity, repeatDelay: 1 },
            },
          },
        }}
        initial={active}
        animate={active}
      >
        <PlaygroundMenuIndicator initial={active} animate={active} />
      </PlaygroundMenuIndicatorContainer>
      <AnimatePresence>
        {active === 'active' && (
          <PlaygroundMenu>
            <ActionButton
              css={{ ...tw`rounded-bl-full rounded-tl-full` }}
              copy='default'
              onClick={() =>
                handleDispatch([
                  { type: Portrait.ACTIONTYPE.DEFAULT, payload: undefined },
                  { type: Portrait.ACTIONTYPE.STATE, payload: Portrait.STATE.DEFAULT },
                ])
              }
            >
              <MdOutlineSettingsBackupRestore />
            </ActionButton>
            <ActionButton
              css={{ ...tw`rounded-none` }}
              copy='contrast'
              onClick={handleContrast}
            >
              <RiContrastFill />
            </ActionButton>
            <ActionButton
              css={{ ...tw`rounded-none` }}
              copy='theme'
              onClick={handleTheme}
            >
              <RiPaletteFill />
            </ActionButton>
            <ActionButton
              css={{ ...tw`rounded-none` }}
              copy='custom'
              onClick={() =>
                handleDispatch([
                  { type: Portrait.ACTIONTYPE.STATE, payload: Portrait.STATE.CUSTOM },
                ])
              }
            >
              <RiTShirt2Line />
            </ActionButton>
            <ActionButton
              css={{ ...tw`rounded-none` }}
              copy='color'
              onClick={() =>
                handleDispatch([
                  { type: Portrait.ACTIONTYPE.STATE, payload: Portrait.STATE.COLOR },
                ])
              }
            >
              <MdOutlineFormatPaint />
            </ActionButton>
            <ActionButton
              css={{ ...tw`rounded-none` }}
              copy='random'
              onClick={() =>
                handleDispatch([{ type: Portrait.ACTIONTYPE.RANDOM, payload: undefined }])
              }
            >
              <RiShuffleFill />
            </ActionButton>
            <ActionButton
              css={{ ...tw`rounded-tr-full rounded-br-full` }}
              copy='data'
              onClick={() =>
                handleDispatch([
                  { type: Portrait.ACTIONTYPE.STATE, payload: Portrait.STATE.DATA },
                ])
              }
            >
              <VscJson />
            </ActionButton>
            {/* <ActionButton
              css={{ ...tw`rounded-tr-full rounded-br-full` }}
              copy='save'
              onClick={() =>
                handleDispatch([
                  { type: Portrait.ACTIONTYPE.STATE, payload: Portrait.STATE.DEFAULT },
                ])
              }
            >
              <RiSave2Line />
            </ActionButton> */}
          </PlaygroundMenu>
        )}
      </AnimatePresence>
    </>
  );
}
