import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group, Card, Heading } from "@offcourse/atoms";
import { List, Share, Description, TagGroup } from "@offcourse/molecules";
import Status from "./Status";

export default class FeatureCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    what: PropTypes.shape({
      description: PropTypes.string.isRequired,
      requirements: PropTypes.shape({
        mustHaves: PropTypes.arrayOf(PropTypes.string).isRequired,
        niceToHaves: PropTypes.arrayOf(PropTypes.string)
      }).isRequired
    }).isRequired,
    planning: PropTypes.shape({
      due: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      started: PropTypes.bool.isRequired
    }).isRequired
  };

  render() {
    const { name, what, planning, who, why } = this.props;
    const { mustHaves, niceToHaves } = what.requirements;
    const requirements = [...mustHaves, niceToHaves];

    return (
      <Card>
        <Heading section="header">{name}</Heading>

        <Group alignItems="stretch" section="what">
          <Description pb={6} label="what does this feature do?">
            {what.description}
          </Description>
          <List section="requirements">
            {requirements.map((r, index) => (
              <List.Item key={index}>{r}</List.Item>
            ))}
          </List>
        </Group>

        <Description label="why do we need this feature?" section="why">
          {why}
        </Description>

        <Group alignItems="stretch" section="who">
          <Description label="who could build this?" section="who">
            {who.description}
          </Description>
          <TagGroup pt={6} section="tags" tags={who.skills} />
        </Group>
        <Status inverse {...planning} />
        <Share url="aa" text="aaa" providers={["twitter", "facebook", "url"]} />
      </Card>
    );
  }
}
