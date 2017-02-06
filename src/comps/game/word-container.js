import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import makePannable from '../decorators/panning-decorator';

@makePannable
class WordContainer extends Component {
  render() {
    const {
      absoluteChangeX, absoluteChangeY, word
    } = this.props;
    const transform = [
      { translateX: absoluteChangeX },
    ];

    return (
      <View style={[{ transform }, styles.container]}>
        <Text style={styles.word}>{word[0].toUpperCase() + word.substr(1)}</Text>
      </View>
    )
  }
}

WordContainer.propTypes = {
  absoluteChangeX: React.PropTypes.number,
  absoluteChangeY: React.PropTypes.number,
  word: React.PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    //width: 80,
    backgroundColor: 'aqua',
    borderRadius: 2,
    elevation: 4,
  },
  word: {
    fontSize: 50,
  },
})

export default WordContainer