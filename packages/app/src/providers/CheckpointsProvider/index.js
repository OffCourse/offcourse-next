import React from "react";
import { adopt } from "react-adopt";
import { AuthProvider } from "..";
import CheckpointsQuery from "./CheckpointsQuery";

const mapper = {
  userName: ({ render }) => (
    <AuthProvider>{({ userName }) => render(userName)}</AuthProvider>
  ),
  checkpoints: ({ userName, courseId, render }) => {
    return (
      <CheckpointsQuery userName={userName} courseId={courseId}>
        {render}
      </CheckpointsQuery>
    );
  }
};

const mapProps = ({ userName, checkpoints }) => ({
  checkpoints,
  userName
});

export default adopt(mapper, mapProps);
