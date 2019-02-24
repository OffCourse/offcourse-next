import React from "react";
import PropTypes from "prop-types";
import { Query } from "../../components";
import { queries } from "./graphql";

const ResourceProvider = ({ children, resourceUrl }) => {
  return (
    <Query query={queries.resource} variables={{ resourceUrl }}>
      {({ data, loading }) => {
        if (loading) {
          return children({ resource: { loading } });
        }
        const { resource } = data;
        return children({ resource });
      }}
    </Query>
  );
};

ResourceProvider.propTypes = {
  children: PropTypes.func.isRequired,
  resourceUrl: PropTypes.string.isRequired
};

export default ResourceProvider;
