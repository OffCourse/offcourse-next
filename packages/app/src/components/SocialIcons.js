import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@offcourse/atoms";
import { IconGroup } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { EXTRA_LARGE } = sizes;

const SocialIcons = () => {
  return (
    <IconGroup>
      <Icon
        href="mailto:contact@offcourse.io"
        size={EXTRA_LARGE}
        name="email"
      />
      <Icon
        href="https://twitter.com/offcourse_?lang=en"
        size={EXTRA_LARGE}
        mx={4}
        name="twitter"
      />
      <Icon
        href="https://medium.com/@offcourse_io"
        size={EXTRA_LARGE}
        name="medium"
      />
    </IconGroup>
  );
};

export default SocialIcons;
