import React, { Component, createProvider } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

export default class ThemeProvider extends Component {
    render() {
        const { children } = this.props;
        return (
            <Composer
                components={[
                    <Query query={queries.theme} />,
                    <Mutation mutation={mutations.switchTheme} />
                ]}
            >
                {([
                    queryResult,
                    switchTheme
                ]) => {
                    const value = {
                        ...queryResult.data.theme,
                        switch: switchTheme
                    };
                    return children(value)
                }}
            </Composer>
        )
    }
}