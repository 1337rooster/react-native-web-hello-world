import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View } from 'react-native';
import Root           from './app/native/containers/Root';
import configureStore from './app/store/configureStore.prod.js';

import Colors from './app/color/colors'
import ColorSearchBox from './app/mobile/ColorMobileSearchBox';

/*
const store = configureStore();

class ReactNativeelloWorld extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}
AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeelloWorld);
*/

export default class SearchBoxMobile extends Component {
  render() {
    return (
      <ColorSearchBox searchStore={new Colors()}/>
    );
    /*
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );*/
  }
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => SearchBoxMobile);

