import '../setupTests';

import React from 'react';
import ReactDOM from 'react-dom';
import { create as render } from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Button from './Button';
import ButtonWrapper from './ButtonWrapper';
import { formatTitle } from '../helpers';

describe('Button', () => {
  const props = {
    variant: "primary",
    children: formatTitle("click me!"),
    type: "button",
  };

  it('passes props', () => {
    const tree = shallow(<Button {...props} />);
    
    expect(tree.props()).toMatchObject(props);
  });

  it('creates anchor when href is passed', () => {
    const tree = shallow(<Button href="https://offcourse.io" />);

    expect(tree.find('a')).toHaveLength(1);
    expect(tree.find('a').props().href).toBe('https://offcourse.io');
  });

  it('changes variant prop when disabled', () => {
    const tree = shallow(<Button disabled={true} />);

    expect(tree.props().variant).toBe("disabled");
  });

  it('handles onClick event', () => {
    const onButtonClick = sinon.spy();
    const tree = shallow(<Button onClick={onButtonClick} />);

    tree.simulate('click');

    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Button />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
