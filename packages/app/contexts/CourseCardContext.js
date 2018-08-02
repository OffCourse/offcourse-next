import React, { Component, createContext } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

const { Provider, Consumer } = createContext();

export default class CourseCardContext extends Component {
    static Consumer = Consumer;
    static Provider = Provider;

    render() {
        const { children } = this.props;
        return (
            <Composer
                components={[
                    <Query query={queries.courseCard} />,
                    <Mutation mutation={mutations.changeCardSize} />,
                ]}
            >
                {([
                    queryResult,
                    changeCardSize
                ]) => {
                    const changeLevel = (variables) => changeCardSize({ variables });
                    const value = {
                        ...queryResult.data.courseCard,
                        changeLevel
                    };
                    return (
                        <CourseCardContext.Provider value={value}>
                            {children}
                        </CourseCardContext.Provider>
                    )
                }}
            </Composer>
        )
    }
}