import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import makePannable from '../decorators/panning-decorator';

import timer from 'react-native-timer';
// { setInterval, clearInterval }
@makePannable
class WordContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      top:0
    }
  }

  calculateTop() {
    return this.props.containerHeight - 100
  }

  componentWillMount() {
    timer.setInterval(this, 'fallingBlock', () => {
      const top = this.state.top + 100;
      if (top > this.calculateTop()) {
        timer.clearInterval(this);
        return;
      }
      this.setState({top});
    }, 1000)
  }

  componentWillDismount() {
    timer.clearInterval(this);
  }

  render() {
    const {
      absoluteChangeX, absoluteChangeY, word
    } = this.props;
    const transform = [
      { translateX: absoluteChangeX },
    ];

    return (
      <View style={[{ transform }, styles.container, {top: this.state.top}]}>
         {(word.length > 0) && <Text style={styles.word}>{word[0].toUpperCase() + word.substr(1)}</Text>}
      </View>
    )
  }
}

WordContainer.propTypes = {
  absoluteChangeX: React.PropTypes.number,
  absoluteChangeY: React.PropTypes.number,
  word: React.PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    //width: 80,
    position:'absolute',
    backgroundColor: 'aqua',
    borderRadius: 2,
    elevation: 4,
    height: 50,
  },
  word: {
    fontSize: 50,
  },
})

export default WordContainer