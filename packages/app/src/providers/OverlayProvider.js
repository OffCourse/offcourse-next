import React, { Component, createContext } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { overlayModes } from "@offcourse/constants";

export default class OverlayProvider extends Component {
    static constants = overlayModes;

    render() {
        const { children } = this.props;
        return (
            <Composer
                components={[
                    <Query query={queries.overlay} />,
                    <Mutation mutation={mutations.openOverlay} />,
                    <Mutation mutation={mutations.closeOverlay} />,
                    <Mutation mutation={mutations.switchOverlayMode} />
                ]}
            >
                {([
                    queryResult,
                    openOverlay,
                    closeOverlay,
                    switchOverlayMode
                ]) => {
                    const value = {
                        ...queryResult.data.overlay,
                        open: openOverlay,
                        close: closeOverlay,
                        switchMode: switchOverlayMode
                    };
                    return children(value)
                }}
            </Composer>
        )
    }
}