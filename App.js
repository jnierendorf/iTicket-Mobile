import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './src/components/home/HomeScreen';
import IncidentScreen from './src/components/incidents/IncidentScreen';
import AboutScreen from './src/components/about/AboutScreen';
import FeedbackScreen from './src/components/feedback/FeedbackScreen';

export default DrawerNavigator({
  Home: { screen: HomeScreen },
  Incident: {screen: IncidentScreen},
  About: {screen: AboutScreen},
  Feedback: {screen: FeedbackScreen}
});
