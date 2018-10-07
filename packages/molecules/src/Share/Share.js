import React, { Component } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { contains, filter, map } from "ramda";
import { Link, Icon } from "@offcourse/atoms";
import { IconGroup } from "..";
import ShareWrapper from "./ShareWrapper";

const twitter = (text, url) => {
  return window.open(
    `http://twitter.com/share?url=${url}&text=${text}`,
    "tshare",
    "height=260,width=550,resizable=0,toolbar=0,menubar=0,status=0,location=0"
  );
};

const facebook = (text, url) => {
  return window.open(
    `http://facebook.com/sharer.php?u=${url}`,
    "fbshare",
    "height=260,width=550,resizable=0,toolbar=0,menubar=0,status=0,location=0"
  );
};

class Share extends Component {
  static propTypes = {
    providers: PropTypes.arrayOf(
      PropTypes.oneOf(["facebook", "twitter", "contact", "url"])
    ).isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    providers: []
  };

  handlers = {
    facebook,
    twitter
  };

  renderIcons() {
    const { providers, url, text } = this.props;
    const isProvider = provider => provider !== "url" && provider !== "contact";
    const socialProviders = filter(isProvider, providers);
    return map(
      name => (
        <Icon
          onClick={() => this.handlers[name](text, url)}
          size={Icon.sizes.NORMAL}
          key={name}
          name={name}
        />
      ),
      socialProviders
    );
  }

  renderGetUrl() {
    const { url } = this.props;
    return (
      <CopyToClipboard text={url}>
        <Link>Get Url</Link>
      </CopyToClipboard>
    );
  }

  renderContact() {
    const { url } = this.props;
    return (
      <CopyToClipboard text={url}>
        <Link>Contact Us</Link>
      </CopyToClipboard>
    );
  }

  render() {
    const { url, providers } = this.props;
    return (
      <ShareWrapper>
        <IconGroup>{this.renderIcons()}</IconGroup>
        {contains("url", providers) && this.renderGetUrl()}
        {contains("contact", providers) && this.renderContact()}
      </ShareWrapper>
    );
  }
}

export default Share;
