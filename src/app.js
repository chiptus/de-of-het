import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';


import GameScreen from './comps/screens/game-screen';
import FinishScreen from './comps/screens/finish-screen';

import words from './lib/words.json';
import buildGame from './lib/game';

export default class App extends Component {

  renderScene(route, navigator) {
    const newGame = () => navigator.replace({ index: 0 });
    switch (route.index) {
      case 0:
        return (
          <GameScreen
            onNewGame={newGame}
            onFinish={(rightCount) => navigator.replace({
              index: 1,
              rightCount
            })}
            />
        );
      case 1:
        return (
          <FinishScreen onRestart={newGame} rightCount={route.rightCount} />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ index: 0 }}
        renderScene={this.renderScene}

        />

    );
  }
}


