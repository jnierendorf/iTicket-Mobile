import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigate('DrawerOpen')
          }
          style={styles.hamburger}
        >
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  hamburger: {
    width: 100
  }
});
