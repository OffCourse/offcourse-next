import React, { memo } from "react";
import PropTypes from "prop-types";
import { addIndex, map } from "ramda";
import Column from "./Column";

const mapIndexed = addIndex(map);

const Grid = ({ grid }) => {
  return mapIndexed((col, ci) => <Column key={ci} columnData={col} />, grid);
};

Grid.propTypes = {
  grid: PropTypes.node
};

export default memo(Grid);
