import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Tabs, Drawer } from 'react-native-router-flux';
import { Icon } from 'native-base';
import Trips from './src/Trips';
import Places from './src/Places';
import Chat from './src/Chat';
import Buddies from './src/Buddies';
import Expenses from './src/Expenses';
import Profile from './src/Profile';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Drawer
          key="profile"
          contentComponent={Profile}
          drawerIcon={<Icon name="ios-menu" />}
          drawerWidth={180}
        >
          <Tabs key="root">
            <Scene
              key="trips"
              component={Trips}
              title="My Trips"
            />
            <Scene
              key="places"
              component={Places}
              title="TripNamePlaceholder"
            />
            <Scene
              key="chat"
              component={Chat}
              title="TripNamePlaceholder"
            />
            <Scene
              key="buddies"
              component={Buddies}
              title="TripNamePlaceholder"
            />
            <Scene
              key="expenses"
              component={Expenses}
              title="TripNamePlaceholder"
            />
          </Tabs>
        </Drawer>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
