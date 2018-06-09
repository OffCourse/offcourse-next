import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Heading } from "@offcourse/atoms";
import { Share, Description, TagGroup } from "@offcourse/molecules";
import Status from "./Status";
import Requirements from "./Requirements";

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
      duration: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      started: PropTypes.bool.isRequired
    }).isRequired
  };

  render() {
    const { name, what, planning, who, why, skills, how } = this.props;

    return (
      <Card>
        <Heading section="header">{name}</Heading>
        <Status {...planning} />
        <Description label="what does this feature do?" section="what">
          {what.description}
        </Description>

        <Requirements {...what.requirements} />

        <Description label="who could build this?" section="who">
          {who}
        </Description>
        <TagGroup section="tags" tags={skills} />

        <Description label="why does offcourse need this?" section="why">
          {why}
        </Description>
        <Description label="how do you build this feature?" section="how">
          {how}
        </Description>
        <Share url="aa" text="aaa" providers={["twitter", "facebook"]} />
      </Card>
    );
  }
}
