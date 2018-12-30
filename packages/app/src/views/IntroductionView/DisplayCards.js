import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isEmpty, map, addIndex } from "ramda";

import { Loading } from "@offcourse/molecules";
import DisplayCard from "./DisplayCard";
import { sizes } from "@offcourse/constants";

const { NORMAL, LARGE, EXTRA_LARGE } = sizes;
const mapIndexed = addIndex(map);

const InnerGrid = styled("div")`
  flex: 1;
  display: none;

  -webkit-box-reflect: below 0.5rem -webkit-gradient(linear, left top, left
        bottom, from(transparent), color-stop(60%, transparent), to(rgba(255, 255, 255, 0.2)));

  .NORMAL-card {
    display: none;
    opacity: 0.8;
    align-items: center;
    transform: scale(0.95);
  }

  @media screen and (min-width: 800px) {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr;
    display: grid;
  }

  @media screen and (min-width: 1600px) {
    display: grid;

    .NORMAL-card {
      display: flex;
    }

    grid-column-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const DisplayCards = ({ courses, handlers }) => {
  if (isEmpty(courses)) {
    return (
      <InnerGrid>
        <Loading size={EXTRA_LARGE} />
      </InnerGrid>
    );
  }
  const { goToCheckpoint, goToCourse, goToCollection } = handlers;
  return (
    <InnerGrid>
      {mapIndexed((course, index) => {
        const size = index === 1 ? LARGE : NORMAL;
        return (
          <DisplayCard
            goToCheckpoint={goToCheckpoint}
            goToCourse={goToCourse}
            goToCollection={goToCollection}
            size={size}
            key={index}
            course={course}
          />
        );
      }, courses)}
    </InnerGrid>
  );
};

DisplayCards.propTypes = {
  handlers: PropTypes.object,
  courses: PropTypes.array
};

export default DisplayCards;
