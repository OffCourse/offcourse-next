import React, { memo } from "react";
import PropTypes from "prop-types";
import { filter, map } from "ramda";
import { Icon } from "@offcourse/atoms";
import { IconGroup } from "..";
import handlers from "./handlers";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

const isProvider = provider => provider !== "url" && provider !== "contact";
const SocialIcons = ({ providers, size, url, text }) => (
  <IconGroup>
    {map(
      name => (
        <Icon
          size={size}
          onClick={() => handlers[name](text, url)}
          key={name}
          name={name}
        />
      ),
      filter(isProvider, providers)
    )}
  </IconGroup>
);

SocialIcons.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.oneOf(["facebook", "twitter", "contact", "url"])
  ).isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE])
};

SocialIcons.defaultProps = {
  providers: [],
  size: LARGE
};

export default memo(SocialIcons);
