/* @flow */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from "react-native-button";
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.pageTwo}>This is PageOne!</Text>

        <Button onPress={Actions.pop}>Back</Button>
      </View>
    )
  }
}
