import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';

import Header from '../common/Header';
import Footer from '../common/Footer';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Incident = t.struct({
  'Summary': t.String,
  'Detailed Description': t.String,
  'Configuration Item': t.maybe(t.String),
  'Support Group': t.maybe(t.String),
  'On Behalf Of': t.maybe(t.String)
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
    summary: {
      error: 'Provide a high level summary of your issue.'
    },
    'Detailed Description': {
      error: 'Provide more detail to your issue.',
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            height: 150,
            textAlignVertical: 'top',
            paddingTop: 5
          },
          error: {
            ...Form.stylesheet.textbox.error,
            height: 150,
            textAlignVertical: 'top',
            paddingTop: 5
          }
        }
      }
    }
  },
  stylesheet: formStyles,
};

export default class IncidentScreen extends React.Component {

  handleSubmit = () => {
    const value = this._form.getValue();

    if (value && value['Summary'] && value['Detailed Description']) {
      Alert.alert('Incident Submitted!',
        ('\nSummary: ' + value['Summary'] +
        '\nDetailed Description: ' + value['Detailed Description'] +
        '\nCI: ' + value['Configuration Item'] +
        '\nSG: ' + value['Support Group'] +
        '\nOn Behalf Of: ' + value['On Behalf Of'])
      );
    } else {
      Alert.alert('Please fill out required fields before submitting.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation}/>
        </View>

        <View style={styles.staticContentContainer}>
          <ScrollView contentContainerStyle={styles.content}>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Create your Incident Ticket</Text>
            </View>

            <View style={styles.formContainer}>
              <Form
                ref={c => this._form = c}
                type={Incident}
                options={options}
              />
              <Button
                title="Submit Incident"
                onPress={this.handleSubmit}
              />
            </View>

          </ScrollView>
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
  staticContentContainer: {
    flex: .85
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    padding: 15
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 24
  }
});
