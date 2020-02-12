import React from 'react';
import renderer from 'react-test-renderer';
import CountRow from './CountRow';

describe('renders correctly CountRow', () => {
  it('Default', () => {
    const tree = renderer.create(<CountRow>8</CountRow>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('With price', () => {
    const tree = renderer.create(<CountRow>$ 10.000</CountRow>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('With textdecoration prop', () => {
    const tree = renderer
      .create(<CountRow textDecoration>$ 10.000</CountRow>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With long value', () => {
    const tree = renderer
      .create(<CountRow textDecoration>$ 10.000.000.000.000.000.000</CountRow>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
