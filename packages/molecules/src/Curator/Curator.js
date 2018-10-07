import React, { Component } from "react";
import PropTypes from "prop-types";
import { partial } from "ramda";
import { formatTitle } from "../helpers";
import { Group, Text, Avatar, Heading } from "@offcourse/atoms";
import CuratorWrapper from "./CuratorWrapper";

class Curator extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
  };

  renderHeading() {
    const { name, onClick, profileUrl } = this.props;
    return (
      <Heading
        onClick={onClick && partial(onClick, [{ curator: name }])}
        size={Heading.sizes.SMALL}
        href={profileUrl}
      >
        {formatTitle(name)}
      </Heading>
    );
  }

  render() {
    const { name, avatarUrl } = this.props;
    return (
      <CuratorWrapper>
        <Avatar url={avatarUrl} name={name} />
        <Group>
          <Text size={Text.sizes.SMALL}>Curated by</Text>
          {this.renderHeading()}
        </Group>
      </CuratorWrapper>
    );
  }
}

export default Curator;
