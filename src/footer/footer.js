import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Footer extends Component {
  render(props) {
    const {right = 0} = this.props;
    return (
      <View style={styles.container}>
        <Text>Right answers: {right}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    //justifyContent: 'flex-start',
    padding: 16,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between'
    //alignItems: 'stretch',
  }
})

export default Footer;