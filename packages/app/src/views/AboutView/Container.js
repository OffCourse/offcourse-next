import React, { Component } from "react";
import { Adopt } from "react-adopt";
import View from "./View";

const about = `
Offcourse is an open source platform for online learning. The Internet is an endless source of knowledge; blogs, video tutorials or even that one interesting podcast. Offcourse allows you to gather the best sources online and structure them into easy-shareable courses. Now you can get started with **crowdlearning**; sharing what you have learned and learning that others have shared. 

As a young, international team with a great range of educational backgrounds, we know that by sharing knowledge, we grow and develop ourselves. We want to invite you to start learning and sharing with us. Our platform provides you with support in your activities as a learner and trainer. Dive into courses about design, programming, or any other 21st century skill - the skills of the future. Get started, sign up now!

Are you interested in what Offcourse can mean for your organization? Please get in touch with us through [business@offcourse.io](business@offcours.io)
`;

const address = {
  name: "Offcourse",
  street: "Schiemond",
  houseNumber: "20-22",
  zipCode: "3024 EE",
  city: "Rotterdam",
  country: "The Netherlands"
};
const Dummy = ({ children }) => {
  return children({
    title: "About Us",
    text: about,
    address
  });
};
/* eslint: disable */
const mapper = {
  about: <Dummy />
};
/* eslint: enable */

const mapProps = ({ about }) => ({ about });

export default class Container extends Component {
  render() {
    const { handlers } = this.props;
    return (
      <Adopt mapper={mapper} mapProps={mapProps}>
        {props => <View handlers={handlers} {...props} />}
      </Adopt>
    );
  }
}
