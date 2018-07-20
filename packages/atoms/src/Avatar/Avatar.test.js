import '../setupTests';

import React from 'react';
import ReactDOM from 'react-dom';
import system from 'system-components';
import { create as render } from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { ThemeProvider } from "styled-components";

import Avatar from './Avatar';

describe('Avatar', () => {
  const props = {
    url: 'http://offcourse.io',
    name: 'Offcourse',
  };

  it('contains img', () => {
    const wrapper = mount(<Avatar {...props} />);

    expect(wrapper.find('img').length).toEqual(1);
  });

  it('has size 3em', () => {
    const wrapper = shallow(<Avatar {...props} />);

    expect(wrapper.props().size).toEqual('3em');
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Avatar {...props} />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
