import { useState, type ReactNode, useCallback, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { useIsomorphicLayoutEffect } from '../../hooks';

import { themeColors } from './theme.constants';
import { Context, defaultState } from './theme.context';
import type { ThemeState } from './theme.types';
import { CONTRASTTHEME } from './theme.types';

const localStorageKey = 'yondav_theme';

export function Provider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeState>({
    contrast: defaultState.contrast,
    color: defaultState.color,
  });

  const htmlClass = useCallback((classNames: ThemeState) => {
    document.documentElement.classList.remove(
      CONTRASTTHEME.DARK,
      CONTRASTTHEME.LIGHT,
      'default',
      'otb',
      'shea',
      'bs',
      'ces',
      'tape'
    );
    document.documentElement.classList.add(classNames.color, classNames.contrast);
  }, []);

  const setter = useCallback(
    (themeConfig: Partial<ThemeState>) => {
      const updatedTheme = { ...currentTheme, ...themeConfig };

      localStorage.setItem(localStorageKey, JSON.stringify(updatedTheme));
      setCurrentTheme(updatedTheme);
    },
    [currentTheme]
  );

  const checkLocalPref = useCallback(() => {
    const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localStoragePref = localStorage.getItem(localStorageKey);

    if (localStoragePref) setter(JSON.parse(localStoragePref));
    else if (browserPref) setter({ contrast: CONTRASTTHEME.DARK });
  }, [setter]);

  useIsomorphicLayoutEffect(() => {
    checkLocalPref();
  }, []);

  useIsomorphicLayoutEffect(() => {
    htmlClass(currentTheme);
  }, [currentTheme]);

  const value = useMemo(
    () => ({
      ...currentTheme,
      setter,
    }),
    [currentTheme, setter]
  );

  return (
    <Context.Provider value={value}>
      <ThemeProvider theme={themeColors[currentTheme.color]}>{children}</ThemeProvider>
    </Context.Provider>
  );
}
