/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class PPDB extends Component {
  constructor() {
    super();
    this.state = {
        pp: ''
    }
    this.updateText();
  }
  updateText = () => {
    fetch('https://ppdb.gustafn.com/pp', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      this.setState({
        pp: json.word
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
       <View onPress={ this.updateText } style={ styles.container }>
        <TouchableOpacity onPress={ this.updateText } style= { styles.container }>
          <Text style={ styles.text }>
             { this.state.pp }
          </Text>
        </TouchableOpacity>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 54,
  },
});

AppRegistry.registerComponent('PPDB', () => PPDB);
