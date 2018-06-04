import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import { Group, Text, Avatar, Heading } from "@offcourse/atoms";
import CuratorWrapper from "./CuratorWrapper";

class Curator extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
  };

  renderHeading() {
    const { name, profileUrl } = this.props;
    return (
      <Heading size="small" href={profileUrl}>
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
          <Text small>Curated by</Text>
          {this.renderHeading()}
        </Group>
      </CuratorWrapper>
    );
  }
}

export default Curator;
