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
      wordIndex: 0,
      right: 0,
    }
    this.words = [];
    this.handleDoHClick = this.handleDoHClick.bind(this);
  }

  handleDoHClick(lid) {
    if (this.words[this.state.wordIndex].doh === lid) {
      const wordIndex = this.state.wordIndex + 1;
      if (wordIndex === this.words.length) {
        console.log("finished level");
        return;
      }
      //success
      this.setState({
        right: this.state.right + 1,
        wordIndex,
      })
      return;
    }
    console.log("fail");
  }

  componentWillMount() {
     this.words = words;
  //   this.setState({ word: this.words[0] });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {
          this.words.length > 0 && <Game word={this.words[this.state.wordIndex].word} onClick={this.handleDoHClick} />
        }
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
