import React, { Component, Fragment } from "react";
import Composer from "react-composer";
import CheckpointsFragment from "../graphql/fragments/Checkpoints.graphql";
import { isEmpty, map, find, propEq } from "ramda";
import { Query, Mutation } from "../components";
import AuthContext from "../contexts/AuthContext";
import { goToCourse, goToCollection } from "../tempUtils";
import CourseAction from "../components/CourseAction";
import { Group } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { queries, mutations } from "../graphql";
import { CourseCardContext, CourseContext, OverlayContext } from "../contexts";

const { EDIT_COURSE } = OverlayContext.constants;

class CourseActionContainer extends Component {
    render() {
        return (
            <Composer
                components={[
                    <CourseContext.Consumer />,
                    <OverlayContext.Consumer />,
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
