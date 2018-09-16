import logoSvg from "./offcourse-logo.svg";

/**
 * @name Offcourse Theme
 * @description default styles for the Offcourse project
 */
const logo = {
  svg: logoSvg,
  dimensions: { height: 1, width: 4.66666 },
  background: "black"
};

const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  darkGray: "#3d3d3d",
  mediumGray: "#c0c4c1",
  lightGray: "#f4f6f4",
  yellow: "#E5CF39",
  blue: "#75C7B3",
  green: "#A5CC45",
  red: "#E34D2F"
};

const grayScale = [
  baseColors.white,
  baseColors.lightGray,
  baseColors.mediumGray,
  baseColors.darkGray,
  baseColors.black
];

const namedGrayScale = grayScale.map((value, index) => {
  let name;
  if (index === 0) {
    name = "white";
  } else if (index === grayScale.length - 1) {
    name = "black";
  } else {
    name = `gray[${index}]`;
  }
  return { name, value };
});

const colors = {
  grayScale,
  primary: baseColors.blue,
  disabled: grayScale[2],
  positive: baseColors.green,
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

const globals = `
  body {
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    background: ${grayScale[1]};
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
      width: 0px;  /* remove scrollbar space */
      background: transparent;  /* optional: just make scrollbar invisible */
  }

  @font-face {
    font-family: 'Nitti Grotesk';
    src: url('https://app.offcourse.io/fonts/NGN.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Grotesk Bold';
    src: url('https://app.offcourse.io/fonts/NGB.woff') format('woff');
  }

  @font-face {
    font-family: 'Nitti Bold'; 
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
  }
`;

const theme = {
  mode: "default",
  breakpoints,
  fontSizes,
  lineHeights,
  logo,
  space,
  colors,
  borders,
  units,
  fonts,
  grayScale,
  globals,
  namedGrayScale
};

export default theme;
