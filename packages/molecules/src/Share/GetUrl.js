import React, { memo } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "@offcourse/atoms";

const GetUrl = ({ url }) => {
  return (
    <CopyToClipboard text={url}>
      <Link>Get Url</Link>
    </CopyToClipboard>
  );
};

GetUrl.propTypes = {
  url: PropTypes.string
};

export default memo(GetUrl);
