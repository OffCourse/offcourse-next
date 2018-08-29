import '../setupTests';

import React from 'react';
import ReactDOM from 'react-dom';
import { create as render } from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Avatar from './Avatar';
import { lowerCase } from "../helpers";

describe('Avatar', () => {
  const props = {
    url: 'http://offcourse.io',
    name: 'Offcourse',
  };

  it('passes props', () => {
    const tree = shallow(<Avatar {...props} />);

    expect(tree.props().src).toBe(props.url);
    expect(tree.props().alt).toContain(lowerCase(props.name));
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Avatar {...props} />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
