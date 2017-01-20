import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from 'react-native';

import Header from './comps/header/header';
import Game from './comps/game/game';
import Footer from './comps/footer/footer';
import Finish from './comps/game/finish-screen';
import ContentContainer from './comps/layout/content-container';

import words from './lib/words.json';
import buildGame from './lib/game';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: buildGame(words, 0),
      rightCount: 0,
    }

    this.handleDoHClick = this.handleDoHClick.bind(this);
  }

  handleDoHClick(lid) {
    let rightAnswer = this.state.game.checkAnswer(this.state.word.id, lid);
    let rightCount = this.state.rightCount + (rightAnswer ? 1 : 0);
    let word = this.state.game.getNextWord();
    let finish = !word;

    let toastMsg = rightAnswer ? 'Right!' : 'Wrong :(';
    ToastAndroid.show(toastMsg, ToastAndroid.SHORT);

    this.setState({
      rightCount,
      word,
      showFinish: finish,
    });
  }

  componentWillMount() {
    this.setState({word: this.state.game.getNextWord()})
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ContentContainer>
        {
          this.state.word && <Game word={this.state.word.word} onClick={this.handleDoHClick} />
        }
        {
          this.state.showFinish && <Finish />
        }
        </ContentContainer>
        <Footer right={this.state.rightCount} />
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
