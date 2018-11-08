import React, { memo } from "react";
import PropTypes from "prop-types";
import { identity, partial } from "ramda";
import { formatTitle } from "../helpers";
import { Group, Text, Avatar, Heading } from "@offcourse/atoms";
import CuratorWrapper from "./CuratorWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL } = sizes;

const Curator = ({ curator, onClick, profileUrl, avatarUrl }) => (
  <CuratorWrapper>
    <Avatar url={avatarUrl} name={curator} />
    <Group>
      <Text size={SMALL}>Curated by</Text>
      <Heading
        onClick={onClick && partial(onClick, [{ curator }])}
        size={SMALL}
        href={profileUrl}
      >
        {formatTitle(curator)}
      </Heading>
    </Group>
  </CuratorWrapper>
);

Curator.propTypes = {
  curator: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  avatarUrl: PropTypes.string,
  profileUrl: PropTypes.string
};

Curator.defaultProps = {
  onClick: identity
};

export default memo(Curator);
