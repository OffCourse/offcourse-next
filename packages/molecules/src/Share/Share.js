import React, { memo } from "react";
import PropTypes from "prop-types";
import { contains } from "ramda";
import ShareWrapper from "./ShareWrapper";
import GetUrl from "./GetUrl";
import ContactUs from "./ContactUs";
import SocialIcons from "./SocialIcons";

const Share = ({ providers, url, text }) => (
  <ShareWrapper>
    <SocialIcons providers={providers} url={url} text={text} />
    {contains("url", providers) && <GetUrl url={url} />}
    {contains("contact", providers) && <ContactUs />}
  </ShareWrapper>
);

Share.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.oneOf(["facebook", "twitter", "contact", "url"])
  ).isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Share.defaultProps = {
  providers: []
};

export default memo(Share);
