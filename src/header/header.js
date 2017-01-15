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
    //flex: 1,
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    //height: 56,
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },

});

export default Header