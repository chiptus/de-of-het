import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import ContentContainer from '../layout/content-container';
import WordContainer from './word-container';
import DeOfHetContainer from './de-of-het-container';
class Game extends Component {
  render() {
    const {word, onClick} = this.props;
    return (
      <ContentContainer style={styles.container}>
        <WordContainer word={word}/>
        <View style={styles.seperator} />
        <DeOfHetContainer onClick={onClick} />
      </ContentContainer>
    );
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
})

export default Game;