import React, { Component } from "react";
import PropTypes from "prop-types";
import { partial } from "ramda";
import { formatTitle } from "../helpers";
import { Group, Text, Avatar, Heading } from "@offcourse/atoms";
import CuratorWrapper from "./CuratorWrapper";

class Curator extends Component {
  static propTypes = {
    curator: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
  };

  renderHeading() {
    const { curator, onClick, profileUrl } = this.props;
    return (
      <Heading
        onClick={onClick && partial(onClick, [{ curator }])}
        size="small"
        href={profileUrl}
      >
        {formatTitle(curator)}
      </Heading>
    );
  }

  render() {
    const { curator, avatarUrl } = this.props;
    console.log(avatarUrl);
    return (
      <CuratorWrapper>
        <Avatar url={avatarUrl} name={curator} />
        <Group>
          <Text small>Curated by</Text>
          {this.renderHeading()}
        </Group>
      </CuratorWrapper>
    );
  }
}

export default Curator;
