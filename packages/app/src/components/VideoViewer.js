import React from "react";
import PropTypes from "prop-types";
import system from "system-components";
import styled from "styled-components";
import { Loading } from "@offcourse/molecules";

import Loadable from "react-loadable";

const ReactPlayer = Loadable({
  loader: () => import("react-player"),
  loading: Loading
});

const _VideoWrapper = system({
  width: "100%",
  height: "100%",
  position: "relative",
  my: 6,
  pt: "56.25%"
});

const VideoWrapper = styled(_VideoWrapper)`
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const getUrl = ({ videoId, videoProvider }) => {
  return {
    vimeo: `https://vimeo.com/${videoId}`,
    youtube: `https://www.youtube.com/watch?v=${videoId}`
  }[videoProvider];
};

const VideoViewer = ({ videoId, videoProvider }) => {
  return (
    <VideoWrapper>
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        url={getUrl({ videoId, videoProvider })}
      />
    </VideoWrapper>
  );
};

VideoViewer.propTypes = {
  videoId: PropTypes.string.isRequired,
  videoProvider: PropTypes.string.isRequired
};

export default VideoViewer;
