/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from "react-native-button";
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
            <Text>Titre</Text>
        </View>

        <View style={styles.content}>
          <Text onPress={Actions.pageTwo}>This is PageOne!</Text>

          <Button onPress={Actions.pop}>Back</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },

  topBar: {
    flex: .1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },

  content: {
    flex: 1,
    backgroundColor: "blue"
  }
});
