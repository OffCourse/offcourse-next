import React, { memo } from "react";
import { map, addIndex } from "ramda";
import { ColumnWrapper, ItemWrapper } from "./MasonryWrapper";
import PropTypes from "prop-types";

const mapIndexed = addIndex(map);

const Column = ({ columnData }) => {
  return (
    <ColumnWrapper>
      {mapIndexed((cell, i) => {
        return (
          <ItemWrapper key={cell.key || `${columnData}-${i}`}>
            {cell}
          </ItemWrapper>
        );
      }, columnData)}
    </ColumnWrapper>
  );
};

Column.propTypes = {
  columnData: PropTypes.array
};

export default memo(Column);
