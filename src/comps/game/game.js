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
        <View style={styles.seperator} />
        <DeOfHetContainer />
        <View style={styles.seperator} />        
        <WordContainer word={word} onOutside={onClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  seperator: {
    marginBottom: 10,
  },
})

export default Game;