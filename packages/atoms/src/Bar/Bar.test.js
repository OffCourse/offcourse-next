import '../setupTests';

import React from 'react';
import ReactDOM from 'react-dom';
import { create as render } from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Bar from './BarWrapper';

describe('Bar', () => {
  const props = {
    docked: "bottom",
    position: "static",
  };

  it ('passes props', () => {
    const tree = shallow(<Bar {...props} />);

    expect(tree.props()).toMatchObject(props);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Bar {...props} />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
