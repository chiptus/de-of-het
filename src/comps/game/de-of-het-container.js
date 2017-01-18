import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeOfHetContainer extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <View style={styles.deOfHetContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onClick(0)}
          >
          <Text style={styles.ligtWoord}>De</Text>
        </TouchableOpacity>
        <View style={styles.ofContainer}>
          <Text style={styles.of}>of</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onClick(1)}
          >
          <Text style={styles.ligtWoord}>Het</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deOfHetContainer: {
    flexDirection: 'row',
    marginHorizontal: 50,
  },
  button: {
    width: 80,
    backgroundColor: '#000',
    borderRadius: 2,
    elevation: 4,
  },
  ligtWoord: {
    color: '#FFF',
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
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