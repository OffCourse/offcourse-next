import React from "react";
import PropTypes from "prop-types";
import { SocialIcons, SiteContent, Grid } from "../../components";
import { Text, Group } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

const AboutView = ({ content }) => {
  const { title, text, address } = content;
  return (
    <Grid>
      <SiteContent title={title} text={text}>
        <Group flex="none" mb={6}>
          <Text size={LARGE}>{address.name}</Text>
          <Text size={LARGE}>{`${address.street} ${address.houseNumber}`}</Text>
          <Text size={LARGE}>{`${address.zipCode} ${address.city}`}</Text>
        </Group>
        <SocialIcons />
      </SiteContent>
    </Grid>
  );
};

AboutView.propTypes = {
  content: PropTypes.object
};

export default AboutView;
