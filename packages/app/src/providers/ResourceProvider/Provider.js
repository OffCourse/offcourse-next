import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "../../components";
import { queries } from "./graphql";

export default class ResourceProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    resourceUrl: PropTypes.string.isRequired
  };

  render() {
    const { children, resourceUrl } = this.props;
    return (
      <Query query={queries.resource} variables={{ resourceUrl }}>
        {({ data }) => {
          const { resource } = data;
          return children({ resource });
        }}
      </Query>
    );
  }
}
