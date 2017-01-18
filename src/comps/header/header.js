import React, { Component } from 'react';
import { View, Text, StyleSheet, ToolbarAndroid } from 'react-native'



class Header extends Component {
  render() {
    return (
      <View style={styles.containerToolbar}>
        <ToolbarAndroid
          style={styles.toolbar}
          title="De of Het?"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerToolbar: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },

});

export default Header