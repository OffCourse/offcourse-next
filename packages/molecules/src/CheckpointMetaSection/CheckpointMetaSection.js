import React, { memo } from "react";
import PropTypes from "prop-types";
import { Icon, Section, Group } from "@offcourse/atoms";
import { TagGroup } from "..";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;
const resource = {
  video: {
    iconName: "video",
    text: "Video"
  },
  html: {
    iconName: "document",
    text: "Web Article"
  },
  unknown: {
    iconName: "question",
    text: "Unknown"
  }
};

const CheckpointMetaSection = ({ tags, resourceType }) => {
  const { iconName } = resource[resourceType];
  return (
    <Section
      flexDirection="row"
      alignItems="center"
      justifyContent={["flex-start", "space-between", "space-between"]}
    >
      <Icon size={LARGE} name={iconName} />
      <Group ml={7} flexDirection="row" alignItems="center">
        <TagGroup tags={tags} />
      </Group>
    </Section>
  );
};

CheckpointMetaSection.propTypes = {
  resourceType: PropTypes.oneOf(["video", "html", "unknown"]),
  tags: PropTypes.arrayOf(PropTypes.string)
};

CheckpointMetaSection.defaultProps = {
  resourceType: "unknown",
  tags: []
};

export default memo(CheckpointMetaSection);
