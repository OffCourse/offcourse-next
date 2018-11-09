import React, { Component } from "react";
import PropTypes from "prop-types";
import { values, prop, gte, propSatisfies, filter, groupBy } from "ramda";
import { mapIndexed } from "../helpers";
import { Section, Group, Icon } from "@offcourse/atoms";
import { LinkGroup } from "..";
import { sizes, directions } from "@offcourse/constants";

const { LARGE } = sizes;
const { HORIZONTAL, VERTICAL } = directions;

export default class Menu extends Component {
  static Button = ({ onClick }) => {
    return <Icon size={LARGE} name="hamburger" onClick={onClick} />;
  };

  static propTypes = {
    direction: PropTypes.oneOf([HORIZONTAL, VERTICAL]),
    links: PropTypes.arrayOf(PropTypes.shape),
    maxLevel: PropTypes.oneOf([0, 1, 2, 3])
  };

  static defaultProps = {
    alignItems: "stretch",
    direction: VERTICAL,
    maxLevel: 3
  };

  filteredLinks() {
    const { links, maxLevel } = this.props;
    const filterByMaxLevel = filter(propSatisfies(gte(maxLevel))("level"));
    const groupByLevel = groupBy(prop("level"));
    return filterByMaxLevel(links);
  }

  groupedLinks() {
    const groupByLevel = groupBy(prop("level"));
    return values(groupByLevel(this.filteredLinks()));
  }

  render() {
    const {
      display,
      direction,
      px,
      pb,
      justifyContent,
      alignItems
    } = this.props;
    return direction === "horizontal" ? (
      <LinkGroup
        display={display}
        px={px}
        pb={pb}
        justifyContent={justifyContent}
        alignItems="center"
        links={this.filteredLinks()}
        direction={direction}
      />
    ) : (
      <Group alignItems={alignItems}>
        {mapIndexed((links, index) => {
          return (
            <Section key={index}>
              <LinkGroup key={index} links={links} direction={direction} />
            </Section>
          );
        }, this.groupedLinks())}
      </Group>
    );
  }
}
