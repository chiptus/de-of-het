import {View} from 'react-native';
import React from 'react';
import decorator from './panning-decorator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const Comp = decorator(View);
  const tree = renderer.create(
    <Comp />
  );
  //expect(tree).toMatchSnapshot();
});