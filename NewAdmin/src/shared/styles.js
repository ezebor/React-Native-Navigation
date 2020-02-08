import { css } from 'styled-components';
// Global style variables

const palette = Object.freeze({
  // Palette
  darkGreyBlue: '#372c57',
  duskyBlue: '#4b5ea2',
  white: '#ffffff',
  dark: '#2d2938',
  cerulean: '#029cdc',
  purplishBrown: '#473c41',
  paleMauve: '#ecebec',
  paleRed: '#dc4b43',
  dirtyPurple: '#62595d',
  darkGreyBlue10: '#2c3357',
  purpleyGrey: '#918a8d',
  fadedPink: '#bfbbbd',
  mango: '#ffb337',
});

const brandColors = Object.freeze({
  // Brand Colors
  primaryBlue: palette.cerulean,
  skyBlue: palette.duskyBlue,
  darkBlue: palette.darkGreyBlue10,
  darkGreyBlueTwo: palette.darkGreyBlue10,
  deepBlue: palette.dark,
  white: palette.white,
  nubeWhite: palette.paleMauve,
  lightGray: palette.fadedPink,
  midGray: palette.purpleyGrey,
  darkGray: palette.dirtyPurple,
  textGray: palette.purplishBrown,
});

const supportColors = Object.freeze({
  success: '#0ca76b',
  warning: palette.mango,
  danger: palette.paleRed,
});

const orderStates = {
  waitingPayment: '#FFB437',
  waitingShipment: '#2C3457',
  waitingPacking: '#039DDD',
};

export const subUnitColors = Object.freeze({
  // Subunit Colors
  apps: '#953e91',
  university: '#33c7b3',
  university60: '#2e9987',
  university40: '#206658',
  university20: '#10332c',
});

const color = {
  // Palette
  primary: brandColors.primaryBlue,
  secondary: brandColors.darkGreyBlueTwo,
  tertiary: brandColors.white,
  nubeWhite: brandColors.nubeWhite,
  textGray: brandColors.textGray,
  // Monochrome
  lightest: palette.white,
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  // Status
  positive: supportColors.success,
  negative: supportColors.danger,
  warning: supportColors.warning,
};

const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

const background = Object.freeze({
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
});

const backgroundButton = Object.freeze({
  primary: color.primary,
  primaryHover: '#14b9fd',
  secondary: color.secondary,
  secondaryHover: '#3d4779',
  text: color.white,
  textDanger: color.white,
  danger: color.negative,
  outLine: color.white,
  outLineHover: '#e3e4e7',
});

const buttonBorder = Object.freeze({
  primary: color.primary,
  secondary: color.secondary,
  text: color.white,
  outLine: color.secondary,
});

const typography = {
  type: {
    primary: '"Centranube", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90',
  },
};

const breakpoint = 600;
const pageMargin = '5.55555';

const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

export {
  palette,
  pageMargins,
  pageMargin,
  breakpoint,
  typography,
  spacing,
  color,
  background,
  orderStates,
  brandColors,
  backgroundButton,
  buttonBorder,
};
