import React, { Component, createContext } from 'react'
import { map, prop } from "ramda";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import {
    updateQuery,
} from "../tempUtils";

const { Provider, Consumer } = createContext();

export default class CourseCollectionContext extends Component {
    static Consumer = Consumer;
    static Provider = Provider;

    render() {
        const { children, curator, tag } = this.props;
        return (
            <Query query={queries.courses} variables={{ curator, tag }}>
                {({ data, fetchMore }) => {
                    const { edges, pageInfo } = data.courses;
                    const courses = map(prop("node"), edges);
                    const hasMore = pageInfo.hasNextPage;

                    const loadMore = () => {
                        fetchMore({
                            query: queries.courses,
                            variables: { curator, tag, after: pageInfo.endCursor },
                            updateQuery
                        });
                    };

                    const value = {
                        courses,
                        hasMore,
                        loadMore
                    };
                    return (
                        <CourseCollectionContext.Provider value={value}>
                            {children}
                        </CourseCollectionContext.Provider>
                    )
                }
                }
            </Query>
        )
    }
}