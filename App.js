/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableHighlight } from 'react-native';
import { observable, when } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class App extends Component {
  @observable score = 1;
  @observable showWin = false;

  watcher = when(() => this.score === 10, () => (this.showWin = true));
  
  updateScore = () => {
    this.score = this.score + 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <TouchableHighlight style ={styles.button}>
            <Button onPress={this.updateScore} title="Update" color="white"/> 
          </TouchableHighlight> 
        <Text>Score: {this. score}</Text>
        {this.showWin && <Text>You Win!</Text>}
      </View>
      )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width:160,
    borderRadius:10,
    backgroundColor : '#00aeef',
    marginLeft :50,
    marginRight:50,
    marginTop :20  
  },
});

