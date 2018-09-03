import React from "react";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../components";
import { overlayModes } from "@offcourse/constants";
import initData from "../graphql";

const { queries, mutations } = initData;

const mapper = {
  overlayQuery: <Query query={queries.overlay} />,
  openOverlay: <Mutation mutation={mutations.openOverlay} />,
  closeOverlay: <Mutation mutation={mutations.closeOverlay} />,
  switchOverlayMode: <Mutation mutation={mutations.switchOverlayMode} />
};

const mapProps = ({
  overlayQuery,
  openOverlay,
  closeOverlay,
  switchOverlayMode
}) => ({
  ...overlayQuery.data.overlay,
  open: variables => openOverlay({ variables }),
  close: closeOverlay,
  switchMode: switchOverlayMode
});

const OverlayProvider = adopt(mapper, mapProps);

OverlayProvider.constants = overlayModes;

export default OverlayProvider;
