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
    grid-column-gap: 3rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1600px) {
    height: 80vh;
    margin: 4rem;
    grid-column-gap: 3rem;
    grid-template-columns: 1fr 3fr;
  }
`;

export default Grid;
