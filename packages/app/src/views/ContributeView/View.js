import React from "react";
import PropTypes from "prop-types";
import { SocialIcons, SiteContent, Grid } from "../../components";

const AboutView = ({ contribute }) => {
  const { title, text } = contribute;
  return (
    <Grid>
      <SiteContent title={title} text={text}>
        <SocialIcons />
      </SiteContent>
    </Grid>
  );
};

AboutView.propTypes = {
  contribute: PropTypes.object
};

export default AboutView;
