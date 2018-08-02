import React, { Component } from "react";
import { Group } from "@offcourse/atoms";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import system from "system-components";

const MasterWrapper = system({
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

class Master extends Component {
    render() {
        const { children } = this.props;
        return <MasterWrapper>
            <Group alignItems="center" flexDirection="column">
                {children}
            </Group>
        </MasterWrapper>
    }
}

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
