import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Button, Label, Group, Card, Heading, Text } from "@offcourse/atoms";
import { List, Share, Description, TagGroup } from "@offcourse/molecules";
import StatGroup from "./StatGroup";

const COMPLETE = "COMPLETE";
const AVAILABLE = "AVAILABLE";
const IN_PROGRESS = "IN PROGRESS";

const statusIcons = {
  [IN_PROGRESS]: "rocket",
  [COMPLETE]: "checkmark",
  [AVAILABLE]: "add"
};
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

  render() {
    const { name, what, planning, who, why } = this.props;
    const { due, duration, status } = planning;
    const statusIcon = statusIcons[status];
    const Stat = StatGroup.Stat;
    return (
      <Card>
        <Heading section="header">{name}</Heading>

        <StatGroup section="planning">
          <Stat iconName="calendar" label={due} />
          <Stat iconName="clock" label={duration} />
          <Stat iconName="eye" label="beginner" />
        </StatGroup>

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

        <Description label="why do we need this feature?" section="why">
          {why}
        </Description>

        <Group alignItems="stretch" section="who">
          <Description label="who could build this?" section="who">
            {who.description}
          </Description>

          <TagGroup pt={6} section="tags" tags={who.skills} />

          <Group pt={5}>
            <Label>Feature Team</Label>
            {map(member => <Text key={member}>{member}</Text>, who.team)}
            <Button
              variant={status !== COMPLETE ? "default" : "disabled"}
              mt={5}
              size="large"
            >
              {status !== COMPLETE
                ? "Help Us Build This"
                : "We Already Finished This"}
            </Button>
          </Group>
        </Group>
        <Share url="aa" text="aaa" providers={["twitter", "facebook", "url"]} />
      </Card>
    );
  }
}
