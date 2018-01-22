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
  Alert,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class Practice02 extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 1 };
  }
  onButtonPress = () => {
//     Alert.alert('Button has been pressed! cunrrent status:' + this.state.status);
    fetch('http://bbs.reactnative.cn/api/category/3')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText} onPress={this.onButtonPress}>确定</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 142,
    borderRadius: 20,
    backgroundColor: "green",
    justifyContent: "center",
    overflow: "hidden"
  },
  buttonText: {
    textAlign: "center",
    color: "white"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Practice02', () => Practice02);
