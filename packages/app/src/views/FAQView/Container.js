import React from "react";
import { Adopt } from "react-adopt";
import View from "./View";
import { ContentContainer } from "../../containers";

/* eslint: disable */
const mapper = {
  faq: <ContentContainer term="faq" />
};
/* eslint: enable */

const mapProps = ({ faq }) => ({ faq });

const Container = ({ handlers }) => {
  return (
    <Adopt mapper={mapper} mapProps={mapProps}>
      {props => <View handlers={handlers} {...props} />}
    </Adopt>
  );
};

export default Container;
