import React, { Component } from "react";
import PropTypes from "prop-types";
import { Label, Group } from "@offcourse/atoms";
import { List } from "@offcourse/molecules";

export default class Requirements extends Component {
  static propTypes = {
    mustHaves: PropTypes.array.isRequired,
    niceToHaves: PropTypes.array
  };

  static defaultProps = {};

  render() {
    const { mustHaves, niceToHaves } = this.props;
    return (
      <Group alignItems="stretch" section="requirements">
        <Group pb={6} alignItems="stretch">
          <Label px={4} pb={2}>
            Must Haves
          </Label>
          <List section="requirements">
            {mustHaves.map((r, index) => (
              <List.Item key={index}>{r}</List.Item>
            ))}
          </List>
        </Group>
        {niceToHaves && (
          <Group alignItems="stretch">
            <Label px={4} pb={2}>
              Nice To Haves
            </Label>
            <List section="requirements">
              {niceToHaves.map((r, index) => (
                <List.Item key={index}>{r}</List.Item>
              ))}
            </List>
          </Group>
        )}
      </Group>
    );
  }
}
