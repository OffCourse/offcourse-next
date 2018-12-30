import React, { memo } from "react";
import PropTypes from "prop-types";
import { contains } from "ramda";
import ShareWrapper from "./ShareWrapper";
import GetUrl from "./GetUrl";
import ContactUs from "./ContactUs";
import SocialIcons from "./SocialIcons";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

const Share = ({ providers, size, url, text }) => (
  <ShareWrapper>
    <SocialIcons size={size} providers={providers} url={url} text={text} />
    {contains("url", providers) && <GetUrl url={url} />}
    {contains("contact", providers) && <ContactUs />}
  </ShareWrapper>
);

Share.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.oneOf(["facebook", "twitter", "contact", "url"])
  ).isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE])
};

Share.defaultProps = {
  providers: [],
  size: LARGE
};

export default memo(Share);
