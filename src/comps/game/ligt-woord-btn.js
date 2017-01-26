import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import makePannable from '../decorators/panning-decorator';


class LigtWordButton extends Component {
  render() {
    const {
      absoluteChangeX, absoluteChangeY
    } = this.props;
    const transform = [
      { translateX: absoluteChangeX },
      { translateY: absoluteChangeY }
    ];

    
        
    return (
      <TouchableOpacity
        style={button}
        onPress={() => this.props.onClick(this.props.index)}
        >
        <Text style={styles.ligtWoord}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ligtWoord: {
    color: '#FFF',
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
  },
  button: {
    width: 80,
    backgroundColor: '#000',
    borderRadius: 2,
    elevation: 4,
  },
})

export default LigtWordButton

