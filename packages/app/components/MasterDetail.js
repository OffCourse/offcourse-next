import React, { Component } from "react";
import { Group } from "@offcourse/atoms";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import system from "system-components";

const Master = system({
    p: 6,
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column"
});

const Detail = system({
    p: 6,
    flex: 3,
    minWidth: "20rem",
    maxWidth: "55rem"
});

export default class MasterDetail extends Component {
    static Master = Master;
    static Detail = Detail;
    render() {
        const { children } = this.props;
        return (
            <Mutation mutation={mutations.changeCardSize} >
                {(changeCardSize) =>
                    <Group
                        flexDirection="row"
                        flexWrap="wrap"
                        onResize={({ width }) => changeCardSize({ variables: { width } })}>
                        {children}
                    </Group>
                }
            </Mutation >

        )
    }
}
