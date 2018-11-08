import React, { memo } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import MessageWrapper, { BasicMessageWrapper } from "./MessageWrapper";
import { variants } from "@offcourse/constants";

const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

const Message = ({ children, basic, variant }) => {
  const Wrapper = basic ? BasicMessageWrapper : MessageWrapper;
  const padding = basic ? { px: 0, py: 0 } : { px: 5, py: 4 };
  return (
    <Wrapper variant={variant} {...padding}>
      {formatTitle(children)}
    </Wrapper>
  );
};

Message.propTypes = {
  children: PropTypes.string.isRequired,
  basic: PropTypes.bool,
  variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE])
};

Message.defaultProps = {
  variant: DEFAULT
};

export default memo(Message);
