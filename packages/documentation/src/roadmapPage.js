import React, { Component } from "react";
import PropTypes from "prop-types";
import { Page } from "catalog";
import { Group } from "@offcourse/atoms";
import { map, pathEq } from "ramda";
import Roadmap from "./components/Roadmap";
import Filter from "./components/Filter";

const COMPLETE = "COMPLETE";
const IN_PROGRESS = "IN PROGRESS";
const AVAILABLE = "AVAILABLE";

const statuses = [AVAILABLE, IN_PROGRESS, COMPLETE];
const statusTable = {
  "false false": AVAILABLE,
  "true false": IN_PROGRESS,
  "true true": COMPLETE
};

export default class RoadmapPage extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  prepItems() {
    const { items } = this.props;

    const isCompleted = pathEq(["planning", "completed"], true);
    const hasStarted = pathEq(["planning", "started"], true);

    return map(item => {
      const preds = `${hasStarted(item)} ${isCompleted(item)}`;
      item.planning.status = statusTable[preds];
      return item;
    }, items);
  }

  render() {
    return (
      <Page>
        <Group
          alignItems="stretch"
          justifyContent="space-between"
          px={6}
          py={6}
          flexDirection="column"
        >
          <Filter
            path={["planning", "status"]}
            items={this.prepItems()}
            categories={statuses}
            onSwitch={category => console.log(category)}
          >
            {({ filtered }) => <Roadmap items={filtered} />}
          </Filter>
        </Group>
      </Page>
    );
  }
}
