import React from "react";
import PropTypes from "prop-types";
import { Route } from "../../components";
import { MasterDetailLayout } from "../../layouts";
import {
  CheckpointSection,
  MasterSection,
  CheckpointsSection
} from "./sections";
import { Switch } from "react-router-dom";

const { Detail } = MasterDetailLayout;

const View = ({ match, ...rest }) => {
  const { url } = match;
  const checkpointPath = `${url}/task/:task`;

  return (
    <MasterDetailLayout>
      <Switch>
        <Route
          path={checkpointPath}
          componentProps={{
            ...rest,
            layout: [["header", "meta", "checkpoints"]]
          }}
          component={MasterSection}
        />
        )} />
        <Route
          componentProps={{
            ...rest,
            isAlwaysVisible: true,
            layout: [["header", "meta", "description"]]
          }}
          component={MasterSection}
        />
        )} />
      </Switch>
      <Detail>
        <Switch>
          <Route
            path={checkpointPath}
            componentProps={{ ...rest }}
            component={CheckpointSection}
          />
          <Route componentProps={{ ...rest }} component={CheckpointsSection} />
        </Switch>
      </Detail>
    </MasterDetailLayout>
  );
};

View.propTypes = {
  toggleCheckpoint: PropTypes.func,
  course: PropTypes.object.isRequired,
  match: PropTypes.object,
  action: PropTypes.object
};

View.defaultProps = {
  layout: [["header", "meta", "description"]]
};

export default View;
