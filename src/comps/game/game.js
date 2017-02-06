import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import ContentContainer from '../layout/content-container';
import WordContainer from './word-container';
import DeOfHetContainer from './de-of-het-container';
class Game extends Component {
  
  static PropTypes = {
    word: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onPanEnd = this.onPanEnd.bind(this);
  }

  render() {
    const {word = '', onClick} = this.props;
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <View style={styles.seperator} />
        <DeOfHetContainer />
        <View style={styles.seperator} />
        {word.length && <WordContainer word={word} onPanEnd={this.onPanEnd} />}
      </View>
    );
  }

  onLayout = ({ nativeEvent: { layout: {width, height} } }) => {
    this.width = width;
  }

  getBorder() {
    return (this.width / 2) - 50;
  }

  onPanEnd = ({absoluteChangeX, returnToDefaultLocation}) => {
    returnToDefaultLocation();
    if (absoluteChangeX > this.getBorder()) {
      this.props.onClick(1);
      return;
    }
    if (absoluteChangeX < -1 * this.getBorder()) {
      this.props.onClick(0);
      return;
    }
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