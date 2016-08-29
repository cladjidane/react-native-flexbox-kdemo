/* @flow */

import React, { Component } from 'react';
import { Text } from "react-native";
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'

import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

class App extends React.Component {
  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="pageOne" component={PageOne} title="PageOne" hideNavBar />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default App;
