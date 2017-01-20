import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import ContentContainer from '../layout/content-container';
import WordContainer from './word-container';
import DeOfHetContainer from './de-of-het-container';
class Game extends Component {
  render() {
    const {word, onClick} = this.props;
    return (
      <View style={styles.container}>
        <WordContainer word={word}/>
        <View style={styles.seperator} />
        <DeOfHetContainer onClick={onClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  seperator: {
    marginBottom: 100,
  },
})

export default Game;