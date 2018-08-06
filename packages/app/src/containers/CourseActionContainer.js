import React, { Component, Fragment } from "react";
import Composer from "react-composer";
import CheckpointsFragment from "../graphql/fragments/Checkpoints.graphql";
import { isEmpty, map, find, propEq } from "ramda";
import { Query, Mutation } from "../components";
import { goToCourse, goToCollection } from "../tempUtils";
import CourseAction from "../components/CourseAction";
import { Group } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { queries, mutations } from "../graphql";
import { CourseProvider, OverlayProvider } from "../providers";

const { EDIT_COURSE } = OverlayProvider.constants;

class CourseActionContainer extends Component {
    render() {
        const { courseQuery } = this.props;
        return (
            <Composer
                components={[
                    <CourseProvider courseQuery={courseQuery} />,
                    <OverlayProvider />,
                ]}
            >
                {([{ userIsCurator, courseQuery, userName, course }, overlay]) => {
                    const actions = [
                        {
                            condition: userIsCurator,
                            onClick: () =>
                                overlay.open({
                                    variables: {
                                        mode: EDIT_COURSE,
                                        courseId: course.courseId
                                    }
                                }),
                            label: "Edit Course"
                        },
                        {
                            condition: !!course.fork && !userIsCurator,
                            onClick: () =>
                                goToCourse({ ...courseQuery, curator: userName }),
                            label: "Go To Fork"
                        },
                        {
                            condition: !course.fork && !userIsCurator,
                            onClick: () => alert("working on it"),
                            label: "Fork Course"
                        }
                    ];

                    const { onClick, label } = find(
                        propEq("condition", true),
                        actions
                    );

                    return (
                        <CourseAction onClick={onClick} label={label} />
                    );
                }}
            </Composer>
        );
    }
}

export default CourseActionContainer;
