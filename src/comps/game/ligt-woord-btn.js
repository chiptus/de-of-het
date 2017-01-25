import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import makePannable from '../decorators/panning-decorator';


class LigtWordButton extends Component {
  render() {
    const Comp = makePannable(<TouchableOpacity
      style={styles.button}
      onPress={() => this.props.onClick(this.props.index)}
      >
      <Text style={styles.ligtWoord}>{this.props.children}</Text>
    </TouchableOpacity>);
    return (
      <Comp />
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

