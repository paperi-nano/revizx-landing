import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      background: '#f2f2f2',
      text: '#262626',
      borders: '#262626',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: 12,
      2: 13,
      3: 16,
    },
    fonts: {
      primary: 'Hind, sans-serif',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      modal: '0px 0px 6px 2px #DEEFE742',
      input: '0px 0px 6px 2px #DEEFE799',
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    mobile: '(min-width: 576px)',
    smallTablet: '(min-width: 768px)',
    tablet: '(min-width: 992px)',
    laptop: '(min-width: 1200px)',
    desktop: '(min-width: 1400px)',
  },
  utils: {
    marginX: (value: Stitches.ScaleValue<'space'>) => ({ marginLeft: value, marginRight: value }),
  },
});
