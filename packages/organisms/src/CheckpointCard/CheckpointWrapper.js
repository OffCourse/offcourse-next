import system from "system-components";
import styled from "styled-components";

const _BCText = system({
  is: "a",
  m: 0,
  mb: 3,
  lineHeight: 1,
  fontSize: 1
});

const BCText = styled(_BCText)`
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
