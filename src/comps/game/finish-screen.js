import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'

import ContentContainer from '../layout/content-container';

class FinishScreen extends Component {
  render () {
    return (
      <ContentContainer>
        <Text>Finsihed! </Text>
      </ContentContainer>
     )
   }
}

export default FinishScreen;