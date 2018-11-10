import React from "react";
import PropTypes from "prop-types";
import { map, isEmpty } from "ramda";
import { Group } from "@offcourse/atoms";
import Breadcrumb from "./Breadcrumb";

const Breadcrumbs = ({ display, pb, breadcrumbs }) => {
  if (isEmpty(breadcrumbs)) {
    return null;
  }
  return (
    <Group display={display} pb={pb}>
      {map(Breadcrumb, breadcrumbs)}
    </Group>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ),
  pb: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  display: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ])
};

export default Breadcrumbs;
