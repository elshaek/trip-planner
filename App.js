import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Tabs, Drawer, Modal } from 'react-native-router-flux';
import { Icon } from 'native-base';
import Trips from './src/Trips';
import Places from './src/Places';
import Chat from './src/Chat';
import Buddies from './src/Buddies';
import Expenses from './src/Expenses';
import Sidebar from './src/Sidebar';
import Profile from './src/Profile';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" title="TripNamePlaceholder">
          <Drawer
            key="sidebar"
            contentComponent={Sidebar}
            drawerIcon={<Icon name="ios-menu" />}
            drawerWidth={180}
          >
            <Tabs
              swipeEnabled
              wrap={false}
            >
              <Scene
                key="places"
                component={Places}
                panHandlers={null}
              />
              <Scene
                key="chat"
                component={Chat}
              />
              <Scene
                key="buddies"
                component={Buddies}
              />
              <Scene
                key="expenses"
                component={Expenses}
              />
            </Tabs>
          </Drawer>
          <Scene
            key="trips"
            component={Trips}
            title="My Trips"
            panHandlers={null}
          />
          <Scene
            key="profile"
            component={Profile}
            title="UserNamePlaceholder"
          />
        </Scene>
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
