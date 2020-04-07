/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

class App extends Component {
  state = {
    placeName: '',
  };

  placenameChangeHandler = (val) => {
    this.setState({placeName: val});
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 300}}
          value={this.state.placeName}
          placeholder="Hello"
          onChangeText={this.placenameChangeHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
