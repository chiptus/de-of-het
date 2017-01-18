import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './comps/header/header';
import Game from './comps/game/game';
import Footer from './comps/footer/footer';

import words from './lib/words.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: null,
      right: 0,
    }

    this.handleDoHClick = this.handleDoHClick.bind(this);
  }

  handleDoHClick(lid) {
    if (this.state.word.doh === lid) {
      //success
      console.log("suc");
      return;
    }
    console.log("fail");
  }

  componentWillMount() {
    this.words = words;
    this.setState({ word: this.words[0] });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Game word={this.state.word.word} onClick={this.handleDoHClick} />
        <Footer right={this.state.right} />
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
