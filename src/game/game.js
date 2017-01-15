import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import WordContainer from './word-container';

class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WordContainer />
        <View style={styles.seperator} />
        <View style={styles.deOfHetContainer}>
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.ligtWoord}>De</Text>
          </TouchableOpacity>
          <View style={styles.ofContainer}>
            <Text style={styles.of}>of</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.ligtWoord}>Het</Text>
          </TouchableOpacity>
        </View>
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
  seperator: {
    marginBottom: 100,
  },
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
  de: {

  },
  ofContainer: {
    flex: 1,
    alignItems: 'center',
  },
  of: {
    fontSize: 30,
  },  
  het: {

  }
})

export default Game;