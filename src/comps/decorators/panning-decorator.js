import React, { Component } from 'react';
import { View, Text, PanResponder } from 'react-native'

const noop = () => { };

export default BaseComponent => {
  return class Pannable extends Component {
    static defaultProps = {
      onPan: noop,
      onPanBegin: noop,
      onPanEnd: noop,
    };


    constructor(props) {
      super(props);

      this.lastX = 0;
      this.lastY = 0;

      this.state = {
        absoluteChangeX: 0,
        absoluteChangeY: 0,
        changeX: 0,
        changeY: 0,
      };
    }

    componentWillMount() {
      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: onStartShouldSetPanResponder.bind(this),
        onMoveShouldSetPanResponder: onMoveShouldSetPanResponder.bind(this),
        onPanResponderMove: onPanResponderMove.bind(this),
        onPanResponderTerminationRequest: () => true,
        onPanResponderTerminate: onPanResponderRelease.bind(this),
        onPanResponderRelease: onPanResponderRelease.bind(this),
      });
    }

    render() {
      const {
        onPanBegin,
        onPan,
        onPanEnd,
        ...props
      } = this.props;

      return (
        <View {...this._panResponder.panHandlers} >
          <BaseComponent {...props} {...this.state} />
        </View>
      )
    }

    returnToDefaultLocation() {
      this.setState({
        absoluteChangeX: 0,
        absoluteChangeY: 0,
        changeX: 0,
        changeY: 0,
      });
      this.lastX = 0;
      this.lastY = 0;
    }

  }

}

function onStartShouldSetPanResponder({ nativeEvent: { touches } }, { x0, y0 }) {
  const shouldSet = touches.length === 1;

  if (shouldSet) {
    const {onPanBegin} = this.props;
    onPanBegin({
      originX: x0,
      originY: y0,
    });
  }

  return shouldSet;
}

function onMoveShouldSetPanResponder({nativeEvent: {touches}}) {
  return touches.length === 1;
}

function onPanResponderMove(evt, {dx, dy}) {
  const { onPan } = this.props;
  const newState = {
    absoluteChangeX: this.lastX + dx,
    absoluteChangeY: this.lastY + dy,
    changeX: dx,
    changeY: dy,
  };

  this.setState(newState);

  onPan(newState);
}

function onPanResponderRelease() {
  const { onPanEnd } = this.props;
  const { absoluteChangeX, absoluteChangeY } = this.state;
  this.lastX = this.state.absoluteChangeX;
  this.lastY = this.state.absoluteChangeY;
  onPanEnd({ absoluteChangeX, absoluteChangeY, returnToDefaultLocation: this.returnToDefaultLocation.bind(this) });
}
