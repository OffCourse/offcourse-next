import '../setupTests';

import React from 'react';
import ReactDOM from 'react-dom';
import { create as render } from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Avatar from './Avatar';

describe('Avatar', () => {
  const props = {
    url: 'http://offcourse.io',
    name: 'Offcourse',
  };

  it('matches the snapshot', () => {
    const tree = shallow(<Avatar {...props} />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
