import { motion } from 'framer-motion';
import { useCallback, useMemo } from 'react';
// import { RiContrastFill, RiPaletteFill } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import { UiTheme } from '../../contexts';
import Logo from '../Logo';

import Hamburger from './Nav.Hamburger';

const NavBase = styled(motion.header).attrs({
  initial: { top: '-4rem' },
  animate: {
    top: 0,
    transition: { duration: 0.3, delay: 0.2 },
  },
})(
  tw`fixed w-screen h-20 py-2 px-4 left-0 top-0 z-50 transition-all flex justify-between items-center`
);

const NavClickableGroup = styled.div(
  tw`flex items-center gap-2 p-2 z-50 text-fg rounded shadow-inner shadow-neutral-900 bg-neutral-300 transition-all`
);

export default function Nav() {
  const { contrast, color, setter } = UiTheme.useThemeContext();

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

  return (
    <>
      {/* <NavBase css={{ ...tw`bg-neutral-500 opacity-90` }} /> */}
      <NavBase>
        <div css={{ ...tw`w-36 flex items-center` }}>
          <Logo />
        </div>
        {/* <NavClickableGroup>
          <div
            css={{
              ...tw`p-2 flex gap-2`,
            }}
          >
            <div css={{ ...tw`cursor-pointer` }} onClick={handleContrast}>
              <RiContrastFill size='1.1rem' />
            </div>
            <div
              css={{ ...tw`cursor-pointer` }}
              onClick={handleTheme}
              title={UiTheme.themeColorTitles[color]}
            >
              <RiPaletteFill size='1.1rem' />
            </div>
          </div>
          <Hamburger />
        </NavClickableGroup> */}
      </NavBase>
    </>
  );
}
