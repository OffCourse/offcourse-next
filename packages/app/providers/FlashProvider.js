import React, { Component, createContext } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";


export default class FlashContext extends Component {

    render() {
        const { children } = this.props;
        return (
            <Composer
                components={[

                    <Query query={queries.messages} />,
                    <Mutation mutation={mutations.addMessage} />,
                    <Mutation mutation={mutations.removeMessage} />
                ]}
            >
                {([
                    queryResult,
                    addMessage,
                    removeMessage
                ]) => {
                    const messages = queryResult.data.messages;
                    const push = async (x) => {
                        await addMessage(x)
                        removeMessage()
                    }
                    const value = {
                        messages,
                        push
                    };
                    return children(value)
                }}
            </Composer>
        )
    }
}