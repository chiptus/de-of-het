import 'react-native';
import React from 'react';
import Component from './finish-screen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Component />
  );
  //expect(tree).toMatchSnapshot();
});