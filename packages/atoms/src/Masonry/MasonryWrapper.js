import styled from "styled-components";
import system from "system-components";

const MasonryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
`;

const ItemWrapper = system({
  mb: 6,
  mr: [0, 6, 6]
});

export { MasonryWrapper, ColumnWrapper, ItemWrapper };
