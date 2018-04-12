import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

import Header from '../common/Header';
import Footer from '../common/Footer';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Type = t.enums({
  Feedback: 'Feedback',
  Bug: 'Bug',
  Feature: 'New Feature'
})

const Feedback = t.struct({
  'Summary': t.String,
  'Type': Type,
  'Comment': t.maybe(t.String)
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 15
    },
  },
  controlLabel: {
    normal: {
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
};

const options = {
  fields: {
    Summary: {
      error: 'Provide a high level summary.'
    },
    Type: {
      error: 'Select a type.'
    }
  },
  stylesheet: formStyles,
};

export default class FeedbackScreen extends React.Component {

  handleSubmit = () => {
    const value = this._form.getValue();

    if (value && value['Summary'] && value['Type']) {
      Alert.alert('Feedback Submitted!',
        ('\nSummary: ' + value['Summary'] +
        '\nType: ' + value['Type'] +
        '\nComment: ' + value['Comment'])
      );
    } else {
      Alert.alert('Please fill out required fields before submitting.');
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation}/>
        </View>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Feedback</Text>
          </View>
          <View style={styles.formContainer}>
            <Form
              ref={c => this._form = c}
              type={Feedback}
              options={options}
            />
            <Button
              title="Submit Feedback"
              onPress={this.handleSubmit}
            />
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
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#002663',
    fontSize: 48,
    fontWeight: 'bold',
  },
  formContainer: {
    alignSelf: 'stretch',
    flex: .8,
    padding: 10,
    marginBottom: 24
  },
});
