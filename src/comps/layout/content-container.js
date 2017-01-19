import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class ContentContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
})

export default ContentContainer