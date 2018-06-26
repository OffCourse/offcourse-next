import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { Heading, Text, Link } from "@offcourse/atoms";
import { CourseContainer } from "../containers";
import system from "system-components";

const MasterDetail = system({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%"
});

const Master = system({
  p: 8,
  maxWidth: "22rem",
  display: "flex",
  boxSizing: "border-box"
});

const Detail = system({
  p: 8,
  flex: 3,
  minWidth: "22rem",
  maxWidth: "55rem",
  boxSizing: "border-box"
});

const UnderConstruction = system({
  display: "flex",
  flexDirection: "column",
  height: "40rem",
  border: "5px dashed",
  borderColor: "red",
  justifyContent: "space-around",
  alignItems: "center",
  bg: "white"
});

class CoursePage extends Component {
  render() {
    return (
      <Layout>
        <MasterDetail>
          <Master>
            <CourseContainer />
          </Master>
          <Detail>
            <UnderConstruction>
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
            </UnderConstruction>
          </Detail>
        </MasterDetail>
      </Layout>
    );
  }
}

export default withRouter(CoursePage);
