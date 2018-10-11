import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity, partial } from "ramda";
import { formatTitle } from "../helpers";
import { Group, Text, Avatar, Heading } from "@offcourse/atoms";
import CuratorWrapper from "./CuratorWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL } = sizes;
class Curator extends Component {
  static propTypes = {
    curator: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    avatarUrl: PropTypes.string,
    profileUrl: PropTypes.string
  };

  static defaultProps = {
    onClick: identity
  };

  renderHeading() {
    const { curator, onClick, profileUrl } = this.props;
    return (
      <Heading
        onClick={onClick && partial(onClick, [{ curator }])}
        size={SMALL}
        href={profileUrl}
      >
        {formatTitle(curator)}
      </Heading>
    );
  }

  render() {
    const { curator, avatarUrl } = this.props;
    return (
      <CuratorWrapper>
        <Avatar url={avatarUrl} name={curator} />
        <Group>
          <Text size={SMALL}>Curated by</Text>
          {this.renderHeading()}
        </Group>
      </CuratorWrapper>
    );
  }
}

export default Curator;
