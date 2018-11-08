import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "@offcourse/atoms";

const ContactUs = ({ href }) => {
  return <Link href={href}>Contact Us</Link>;
};

ContactUs.propTypes = {
  href: PropTypes.string
};

export default memo(ContactUs);
