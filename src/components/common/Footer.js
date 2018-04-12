import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View>
        <Text>Liberty Mutual</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
