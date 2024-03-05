import { Stack } from '@sanity/ui';
import type { NavbarProps } from 'sanity';
import { buildLegacyTheme } from 'sanity';

import { colors } from '../../src/styles';

import './desk.css';

const { brand } = colors;

// Adds markup and invokes renderDefault()
export function DeskNav(props: NavbarProps) {
  return <Stack className='nav'>{props.renderDefault(props)}</Stack>;
}

export const deskTheme = buildLegacyTheme({
  '--main-navigation-color': brand.cerise[300],
  '--black': brand.black,
  '--white': brand.white,

  '--gray': brand.neutral[300],
  '--gray-base': brand.neutral[200],

  '--component-bg': brand.peony[200],
  '--component-text-color': brand.black,

  /* Brand */
  '--brand-primary': brand.cerise[100],

  // Default button
  '--default-button-color': brand.peony[400],
  '--default-button-primary-color': brand.cerise[100],
  '--default-button-success-color': brand.aegean[300],
  '--default-button-warning-color': brand.cerise[200],
  '--default-button-danger-color': brand.cerise[300],

  /* State */
  '--state-info-color': brand.cerise[100],
  '--state-success-color': brand.aegean[300],
  '--state-warning-color': brand.cerise[200],
  '--state-danger-color': brand.cerise[300],

  '--focus-color': brand.cerise[100],
});
