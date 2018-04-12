import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from '../common/Header';
import Footer from '../common/Footer';

export default class AboutScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation}/>
        </View>

        <View style={styles.staticContentContainer}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>About</Text>
            </View>
            <View style={styles.faqContainer}>
              <View style={styles.faqItem}>
                <View style={styles.faqTitle}>
                  <Text style={styles.faqTitleText}>What is iTicket?</Text>
                </View>
                <View>
                  <Text style={styles.faqInfo}>iTicket is an application that allows you to easily submit an incident ticket without having to call the IT Help Desk or use Remedy</Text>
                </View>
              </View>
              <View style={styles.faqItem}>
                <View style={styles.faqTitle}>
                  <Text style={styles.faqTitleText}>Why was iTicket developed?</Text>
                </View>
                <View>
                  <Text style={styles.faqInfo}>iTicket was created so that employees have a dedicated and easy-to-use application to report issues they are experiencing.</Text>
                </View>
              </View>
              <View style={styles.faqItem}>
                <View style={styles.faqTitle}>
                  <Text style={styles.faqTitleText}>How does iTicket work?</Text>
                </View>
                <View>
                  <Text style={styles.faqInfo}>You simply enter information into the required fields - Summary and Detailed Description, then click Submit.</Text>
                </View>
              </View>
              <View style={styles.faqItem}>
                <View style={styles.faqTitle}>
                  <Text style={styles.faqTitleText}>What happens next?</Text>
                </View>
                <View>
                  <Text style={styles.faqInfo}>You will receive an automatic email from Remedy advising you of your sucessful ticket submission. 
                    As of the MVP launch of iTicket in Decemeber 2017, all incidents will be automatically routed to the IT Help Desk Remedy Support Group.
                    They will reassign your ticket to the proper support group that will help you with your issue.</Text>
                </View>
              </View>
              <View style={styles.faqItem}>
                <View style={styles.faqTitle}>
                  <Text style={styles.faqTitleText}>Where can I discuss iTicket?</Text>
                </View>
                <View>
                  <Text style={styles.faqInfo}>Feel free to discuss the app with us on our myConnections site.</Text>
                </View>
              </View>
              <View style={styles.faqItem}>
                <View style={styles.faqTitle}>
                  <Text style={styles.faqTitleText}>Where can I report a bug?</Text>
                </View>
                <View>
                  <Text style={styles.faqInfo}>Please navigate to the Feedback tab to provide general fedback, report a bug, or request a new feature.
                    You can also reach out directly to the Product Owner, Mike Mizener.</Text>
                </View>
              </View>
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
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#002663',
    fontSize: 48,
    fontWeight: 'bold',
  },
  faqContainer: {
    flex: .8,
    alignItems: 'center',
  },
  faqItem: {
    borderWidth: .5,
    borderColor: 'black',
    borderRadius: 5,
    margin: 10
  },
  faqTitle: {
    backgroundColor: '#002663'
  },
  faqTitleText: {
    color: 'white',
    fontSize: 22,
    padding: 5
  },
  faqInfo: {
    padding: 5,
    fontSize: 18
  }
});
