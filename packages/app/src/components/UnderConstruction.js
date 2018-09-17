import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Heading, Text, Link } from "@offcourse/atoms";
import system from "system-components";

const UnderConstructionWrapper = system({
    display: "flex",
    flexDirection: "column",
    height: "40rem",
    border: "5px dashed",
    borderColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
    bg: "white"
});
export default class UnderConstruction extends Component {
    render() {
        return (
            <UnderConstructionWrapper>
                <Heading>Work In Progress</Heading>
                <Text>
                    Want to build this component with us? Check the feature roadmap
                    on our documentation site
              </Text>
                <Text>
                    <Link href="https://condescending-wing-149611.netlify.com/">
                        blocks.offcourse.io/roadmap
                </Link>
                </Text>
            </UnderConstructionWrapper>
        )
    }
}
