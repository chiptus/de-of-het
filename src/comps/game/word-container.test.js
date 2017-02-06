import 'react-native';
import React from 'react';
import WordContainer from './word-container';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <WordContainer word={'hello'}/>
  );
  //expect(tree).toMatchSnapshot();
});