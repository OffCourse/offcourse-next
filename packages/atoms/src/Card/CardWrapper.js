import system from "system-components";

const CardWrapper = system({
  display: "block",
  width: ["100%", "20.75rem", "20.75rem"],
  bg: "grayScale.0"
}).extend`
  section:last-child {
    border-bottom: ${({ theme }) => theme.borders[2]};
    border-color: ${({ theme }) => theme.colors.grayScale[2]};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default CardWrapper;
