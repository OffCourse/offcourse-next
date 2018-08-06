import React, { Component, createContext } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

export default class SidebarProvider extends Component {

    render() {
        const { children } = this.props;
        return (
            <Composer
                components={[
                    <Query query={queries.sidebar} />,
                    <Mutation mutation={mutations.toggleSidebar} />
                ]}
            >
                {([
                    queryResult,
                    toggleSidebar
                ]) => {
                    const value = {
                        ...queryResult.data.sidebar,
                        toggle: toggleSidebar
                    };
                    return children(value)
                }}
            </Composer>
        )
    }
}