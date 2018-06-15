import styled from "styled-components";

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

const ItemWrapper = styled.div`
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

export { MasonryWrapper, ColumnWrapper, ItemWrapper };
