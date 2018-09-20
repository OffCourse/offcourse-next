import system from "system-components";

const CardWrapper = system(
  {
    display: "block",
    width: ["100%", "18rem", "18rem"],
    bg: "grayScale.0"
  },
  "space",
  "opacity"
).extend`
  box-sizing: border-box;
  &:hover {
    section:last-child {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  section {
    &:last-child {
      border-bottom: ${({ theme }) => theme.borders[2]};
      border-color: ${({ theme }) => theme.colors.grayScale[2]};
    }
  }
}
`;

export default CardWrapper;
