import logoSvg from "./offcourse-logo.svg";
import { variants, errors } from "@offcourse/constants";
import avatarSVG from "./offcourse-avatar.svg";
import contentError from "./offcourse-content-error.svg";
import noSearchResults from "./offcourse-no-search-results.svg";
import notFound from "./offcourse-not-found.svg";
import genericError from "./offcourse-generic-error.svg";

const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = variants;
const {
  RESOURCE_NOT_LOADING,
  TOTAL_PANIC,
  NO_SEARCH_RESULTS,
  COURSE_NOT_FOUND,
  CHECKPOINT_NOT_FOUND
} = errors;

/**
 * @name Offcourse Theme
 * @description default styles for the Offcourse project
 */
const logo = {
  svg: logoSvg,
  dimensions: { height: 1, width: 4.66666 },
  background: "black"
};
const avatars = {
  [DEFAULT]: {
    svg: avatarSVG,
    dimensions: { height: 1, width: 1 },
    background: "none"
  },
  [RESOURCE_NOT_LOADING]: {
    svg: contentError,
    dimensions: { height: 1, width: 1.9 },
    background: "none"
  },
  [NO_SEARCH_RESULTS]: {
    svg: noSearchResults,
    dimensions: { height: 27 / 15, width: 1 },
    background: "none"
  },
  [COURSE_NOT_FOUND]: {
    svg: notFound,
    dimensions: { height: 1.44, width: 1.1 },
    background: "none"
  },
  [CHECKPOINT_NOT_FOUND]: {
    svg: notFound,
    dimensions: { height: 1.44, width: 1.1 },
    background: "none"
  },
  [TOTAL_PANIC]: {
    svg: genericError,
    dimensions: { height: 1, width: 1.5 },
    background: "none"
  }
};

const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  darkGray: "#797B7A",
  mediumGray: "#C8CAC9",
  lightGray: "#f4f6f4",
  yellow: "#fdbe68",
  red: "#E2625E",
  green: "#658f7b",
  blue: "#b5decb"
};

const grayScale = [
  baseColors.white,
  baseColors.lightGray,
  baseColors.mediumGray,
  baseColors.darkGray,
  baseColors.black
];

const colors = {
  grayScale,
  primary: baseColors.green,
  disabled: grayScale[2],
  positive: baseColors.blue,
  warning: baseColors.yellow,
  info: baseColors.blue,
  negative: baseColors.red,
  white: baseColors.white,
  black: baseColors.black
};

const fonts = {
  base: "Nitti Grotesk",
  bold: "Nitti Grotesk Bold",
  accent: "Nitti Bold"
};

const breakpoints = ["30rem", "48rem", "64rem"];

const baseUnit = 16;

const fontSizes = ["0.75rem", "1rem", "1.375rem", "1.75rem", "2.5rem"];

const lineHeights = [
  "1rem",
  "1.25rem",
  "1.375rem",
  "1.75rem",
  "1.875rem",
  "3rem"
];

const space = [
  0,
  "0.0625rem",
  "0.125rem",
  "0.25rem",
  "0.5rem",
  "0.75rem",
  "1rem",
  "1.5rem",
  "2rem"
];

const borders = [0, "0.0625rem solid", "0.125rem solid"];

const units = {
  sixteenth: "0.0625rem",
  eight: "0.125rem",
  quarter: "0.25rem",
  half: "0.5rem",
  threeQuarter: "0.75rem",
  base: baseUnit,
  baseFont: baseUnit,
  baseLine: "1.25rem",
  logoHeight: "1.875rem",
  subTitleFont: "1.375rem",
  titleFont: "1.75rem",
  titleHeight: "1.875rem"
};

const signalColors = {
  [DEFAULT]: { color: grayScale[3] },
  [DISABLED]: { color: colors.disabled },
  [INFO]: { color: colors.primary },
  [WARNING]: { color: colors.warning },
  [POSITIVE]: { color: colors.positive },
  [NEGATIVE]: { color: colors.negative }
};

const signalColorCombos = {
  [DEFAULT]: {
    backgroundColor: grayScale[3],
    borderColor: colors.primary,
    color: colors.white,
    "&:hover": {
      backgroundColor: colors.primary,
      color: colors.white,
      borderColor: grayScale[3]
    }
  },
  [DISABLED]: {
    backgroundColor: colors.disabled,
    borderColor: colors.disabled,
    color: grayScale[1],
    "&:hover": {
      backgroundColor: colors.disabled,
      color: colors.white,
      borderColor: colors.disabled
    }
  },
  [INFO]: {
    backgroundColor: colors.primary,
    borderColor: grayScale[3],
    color: colors.white,
    "&:hover": {
      backgroundColor: grayScale[3],
      color: colors.white,
      borderColor: colors.primary
    }
  },
  [POSITIVE]: {
    backgroundColor: colors.positive,
    borderColor: grayScale[3],
    color: colors.black,
    "&:hover": {
      backgroundColor: grayScale[3],
      color: colors.white,
      borderColor: colors.positive
    }
  },
  [WARNING]: {
    backgroundColor: colors.warning,
    borderColor: grayScale[3],
    color: colors.black,
    "&:hover": {
      backgroundColor: grayScale[3],
      color: colors.white,
      borderColor: colors.warning
    }
  },
  [NEGATIVE]: {
    backgroundColor: colors.negative,
    borderColor: grayScale[3],
    color: colors.white,
    "&:hover": {
      backgroundColor: grayScale[3],
      color: colors.white,
      borderColor: colors.negative
    }
  }
};

const globals = `
  body {
    top: 0;
    left: 0;
    right: 0;
  }

  ::-webkit-scrollbar {
      width: 0px;  /* remove scrollbar space */
      background: transparent;  /* optional: just make scrollbar invisible */
  }

  @font-face {
    font-family: 'Nitti Grotesk';
    font-display: 'auto';
    src: url('https://app.offcourse.io/fonts/NGN.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Grotesk Bold';
    font-display: 'auto';
    src: url('https://app.offcourse.io/fonts/NGB.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Bold'; 
    font-display: 'auto';
    src: url('https://app.offcourse.io/fonts/NB.woff') format('woff');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body {
    font-family: Nitti Grotesk;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${grayScale[1]};
  }
`;

const theme = {
  breakpoints,
  fontSizes,
  lineHeights,
  logo,
  avatars,
  space,
  colors,
  borders,
  units,
  fonts,
  grayScale,
  globals,
  signalColorCombos,
  signalColors
};

export default theme;
