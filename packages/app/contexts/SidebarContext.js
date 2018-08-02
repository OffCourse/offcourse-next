import React, { Component, createContext } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

const { Provider, Consumer } = createContext();

export default class SidebarContext extends Component {
    static Consumer = Consumer;
    static Provider = Provider;

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
                    return (
                        <SidebarContext.Provider value={value}>
                            {children}
                        </SidebarContext.Provider>
                    )
                }}
            </Composer>
        )
    }
}