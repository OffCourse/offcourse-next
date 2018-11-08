import React, { memo } from "react";
import PropTypes from "prop-types";
import { filter, map } from "ramda";
import { Icon } from "@offcourse/atoms";
import { IconGroup } from "..";
import handlers from "./handlers";

const isProvider = provider => provider !== "url" && provider !== "contact";
const SocialIcons = ({ providers, url, text }) => (
  <IconGroup>
    {map(
      name => (
        <Icon
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
  text: PropTypes.string.isRequired
};

SocialIcons.defaultProps = {
  providers: []
};

export default memo(SocialIcons);
