import styled from "styled-components";

const Grid = styled("div")`
  flex: 1;
  margin: 1rem;
  height: calc(100vh -2.25rem);
  max-width: 1800px;
  display: grid;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 800px) {
    height: 80vh;
    margin: 4rem;
  }
`;

export default Grid;
