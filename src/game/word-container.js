import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'

class WordContainer extends Component {
  render () {
    return (
      <Text style={styles.word}>Tafel</Text>
     )
   }
}

const styles = StyleSheet.create({
  word: {
    fontSize: 50,
  },
})

export default WordContainer