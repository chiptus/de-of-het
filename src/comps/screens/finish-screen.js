import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DefaultLayout from '../layout/default-layout';
import Icon from 'react-native-vector-icons/FontAwesome';

class FinishScreen extends Component {
  render() {
    const {rightCount, onRestart} = this.props;
    return (
      <DefaultLayout>
        <Text style={styles.finishText}>Finished with {rightCount} right answer!</Text>
        <TouchableOpacity onPress={onRestart} style={styles.reset}>
          <Icon name="undo" size={40}></Icon>
        </TouchableOpacity>
      </DefaultLayout>
    )
  }
}

const styles = StyleSheet.create({
  reset: {
    margin: 10,
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 2,
    elevation: 4,
  },
  finishText: {
    fontSize: 30
  },
});

export default FinishScreen;

