import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Button, Label, Group, Card, Heading, Text } from "@offcourse/atoms";
import {
  Description,
  List,
  Share,
  StatGroup,
  TagGroup
} from "@offcourse/molecules";
import { sizes, variants } from "@offcourse/constants";

const { LARGE } = sizes;
const { DEFAULT, DISABLED } = variants;

const COMPLETE = "COMPLETE";

export default class FeatureCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    what: PropTypes.shape({
      description: PropTypes.string.isRequired,
      requirements: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    planning: PropTypes.shape({
      due: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      started: PropTypes.bool.isRequired
    }).isRequired
  };

  renderPlanning() {
    const { planning, who } = this.props;
    const Stat = StatGroup.Stat;
    return (
      <StatGroup section="planning">
        <Stat iconName="calendar" label={planning.due} />
        <Stat iconName="clock" label={planning.duration} />
        <Stat iconName={who.level} label={who.level} />
      </StatGroup>
    );
  }

  renderWhatSection() {
    const { what } = this.props;
    return (
      <Group alignItems="stretch" section="what">
        <Description pb={6} label="what does this feature do?">
          {what.description}
        </Description>
        <List section="requirements">
          {what.requirements.map((r, index) => (
            <List.Item key={index}>{r}</List.Item>
          ))}
        </List>
      </Group>
    );
  }

  renderWhySection() {
    const { why } = this.props;
    return (
      <Description label="why do we need this feature?" section="why">
        {why}
      </Description>
    );
  }

  renderWhoSection() {
    const { who, status } = this.props;
    return (
      <Group alignItems="stretch" section="who">
        <Description label="who could build this?" section="who">
          {who.description}
        </Description>

        <TagGroup pt={6} section="tags" tags={who.skills} />

        <Group pt={6}>
          <Label>Feature Team</Label>
          {map(
            member => (
              <Text key={member}>{member}</Text>
            ),
            who.team
          )}
          <Button
            variant={status !== COMPLETE ? DEFAULT : DISABLED}
            mt={6}
            size={LARGE}
          >
            {status !== COMPLETE
              ? "Build This With Us"
              : "We Already Finished This"}
          </Button>
        </Group>
      </Group>
    );
  }

  renderShareSection() {
    return (
      <Share url="aa" text="aaa" providers={["twitter", "facebook", "url"]} />
    );
  }

  render() {
    const { name } = this.props;
    return (
      <Card width={["100%", "18rem", "18rem"]}>
        <Heading section="header">{name}</Heading>
        {this.renderPlanning()}
        {this.renderWhatSection()}
        {this.renderWhySection()}
        {this.renderWhoSection()}
        {this.renderShareSection()}
      </Card>
    );
  }
}
