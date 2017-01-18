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
    let wordIndex = this.state.wordIndex + 1;
    let finish = false;
    let right = this.state.right;
    let showSuccess = false;
    let showFail = false;
    if (wordIndex === this.words.length) {
      finish = true;
      wordIndex = 0;
    }

    if (this.words[this.state.wordIndex].doh === lid) {
      right += 1;
      showSuccess = true;
    }
    else {
      showFail = true;
    }
    this.setState({
        right,
        wordIndex,
        showSuccess,
        showFail,
        finish,
      }, () => {
        setTimeout(() => {
          this.setState({ showSuccess: false, showFail: false })
        }, 500);
      });
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
        {
          this.state.showSuccess && <Text>Succes</Text>
        }
        {
          this.state.showFail && <Text>Fail</Text>
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
