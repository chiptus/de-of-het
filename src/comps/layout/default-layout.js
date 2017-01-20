import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import Header from '../header/header';
import ContentContainer from '../layout/content-container';

class DefaultLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ContentContainer>
          {this.props.children}
        </ContentContainer>
      </View>
    )
  }
}

export default DefaultLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});