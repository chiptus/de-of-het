import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import makePannable from '../decorators/panning-decorator';

@makePannable
class WordContainer extends Component {
  render() {
    const {
      absoluteChangeX, absoluteChangeY
    } = this.props;
    const transform = [
      { translateX: absoluteChangeX },
      //{ translateY: absoluteChangeY }
    ];

    const {word} = this.props;
    return (
      <View style={{ transform }}>
        <Text style={styles.word}>{word[0].toUpperCase() + word.substr(1)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  word: {
    fontSize: 50,
  },
})

export default WordContainer