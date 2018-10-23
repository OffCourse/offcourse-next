import styled from "styled-components";
import system from "system-components";

const SearchInputWrapper = system({
  is: "form",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  maxWidth: "100vw",
  flex: 1
});

export default styled(SearchInputWrapper)`
  pointer-events: auto;
  border-bottom: ${props => props.theme.borders[2]};
  border-color: ${props => props.theme.colors.grayScale[2]};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
