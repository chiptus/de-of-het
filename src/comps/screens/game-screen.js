import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native'

import DefaultLayout from '../layout/default-layout';
import Game from '../game/game';

import buildGame from '../../lib/game';
import words from '../../lib/words.json';


class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: buildGame(words.map(w => w), 0),
      rightCount: 0,
    }

    this.handleDoHClick = this.handleDoHClick.bind(this);
  }


  componentWillMount() {
    this.setState({ word: this.state.game.getNextWord() })
  }


  handleDoHClick(lid) {
    let rightAnswer = this.state.game.checkAnswer(this.state.word.id, lid);
    let rightCount = this.state.rightCount + (rightAnswer ? 1 : 0);
    let word = this.state.game.getNextWord();
    let finish = !word;
    if (finish) {
      this.props.onFinish(rightCount);
      return;
    }

    let toastMsg = rightAnswer ? 'Right!' : 'Wrong :(';
    ToastAndroid.show(toastMsg, ToastAndroid.SHORT);

    this.setState({
      rightCount,
      word,
      showFinish: finish,
    });
  }

  render() {
    return (
      <DefaultLayout>
        {!!this.state.word && <Game word={this.state.word.word} onClick={this.handleDoHClick} />}
      </DefaultLayout>
    )
  }
}

export default GameScreen