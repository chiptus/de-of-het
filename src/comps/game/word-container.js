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
    
    // if (absoluteChangeX > 180) {
    //   this.props.onOutside(1);
    //   return null;
    // }

    // if (absoluteChangeX < -180) {
    //   this.props.onOutside(0);
    //   return null;
    // }

    const {word} = this.props;
    return (
      <View style={[ {transform} , styles.container]}>
        <Text style={styles.word}>{word[0].toUpperCase() + word.substr(1)}</Text>
      </View>
    )
  }
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