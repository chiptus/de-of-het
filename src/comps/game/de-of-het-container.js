import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import LigtWoordButton from './ligt-woord-btn';

class DeOfHetContainer extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <View style={styles.deOfHetContainer}>
        <LigtWoordButton onClick={onClick} index={0}>De</LigtWoordButton>

        <View style={styles.ofContainer}>
          <Text style={styles.of}>of</Text>
        </View>
        <LigtWoordButton index={1}>Het</LigtWoordButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deOfHetContainer: {
    flexDirection: 'row',
    marginHorizontal: 50,
  },
  ofContainer: {
    flex: 1,
    alignItems: 'center',
  },
  of: {
    fontSize: 30,
  },
})

export default DeOfHetContainer