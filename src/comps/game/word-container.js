import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'

class WordContainer extends Component {
  render () {
    const {word} = this.props;
    return (
      <Text style={styles.word}>{word[0].toUpperCase() + word.substr(1)}</Text>
     )
   }
}

const styles = StyleSheet.create({
  word: {
    fontSize: 50,
  },
})

export default WordContainer