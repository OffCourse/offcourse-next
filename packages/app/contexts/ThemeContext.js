import React, { Component, createContext } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

const { Provider, Consumer } = createContext();

export default class ThemeContext extends Component {
    static Consumer = Consumer;
    static Provider = Provider;

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
                    return (
                        <ThemeContext.Provider value={value}>
                            {children}
                        </ThemeContext.Provider>
                    )
                }}
            </Composer>
        )
    }
}