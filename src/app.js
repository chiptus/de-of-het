import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';


import Finish from './comps/game/finish-screen';
import GameScreen from './comps/screens/game-screen';

import words from './lib/words.json';
import buildGame from './lib/game';

export default class App extends Component {

  renderScene(route, navigator) {
    switch (route.index) {
      case 0:
        return (
          <GameScreen onNewGame={() => navigator.push({ index: 0 })} />
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


