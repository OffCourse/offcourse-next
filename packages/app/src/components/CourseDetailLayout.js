import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { MasterDetail, CourseAction } from ".";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;
export default class CourseDetailLayout extends Component {
  static propTypes = {
    toggleCheckpoint: PropTypes.func,
    handlers: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    action: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    layout: [["header", "meta", "description"]]
  };

  render() {
    const { Master, Detail } = MasterDetail;
    const {
      toggleCheckpoint,
      isMasterVisible,
      handlers,
      course,
      action,
      children,
      layout
    } = this.props;
    const { goHome, goToCheckpoint, goToCollection, goToCourse } = handlers;
    return (
      <MasterDetail>
        <Master visible={isMasterVisible}>
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            layout={layout}
            onCheckpointToggle={toggleCheckpoint}
            onTagClick={goToCollection}
            course={course}
            borderBottom="none"
            headerIcon={
              <Icon
                onClick={goHome}
                size={LARGE}
                color="grayScale.2"
                name="remove"
              />
            }
            expandable={false}
          />
          <CourseAction {...action} />
        </Master>
        <Detail>{children}</Detail>
      </MasterDetail>
    );
  }
}
