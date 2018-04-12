import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from '../common/Header';
import Footer from '../common/Footer';

export default class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation}/>
        </View>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>iTicket</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() =>
              navigate('Incident')
            }>
              <Text style={styles.button} >Create Incident</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    flex: .1,
    backgroundColor: '#002663',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  footer: {
    flex: .05,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  content: {
    flex: .85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#002663',
    fontSize: 76,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: .5,
    alignItems: 'center',
  },
  button: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#002663'
  }
});
