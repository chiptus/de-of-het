import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './header/header';
import Game from './game/game';
import Footer from './comps/footer/footer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Game />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
