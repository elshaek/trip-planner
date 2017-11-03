import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene, Tabs, Drawer, Modal } from 'react-native-router-flux';
import { Icon } from 'native-base';
import Trips from './src/Trips';
import Places from './src/Places';
import Chat from './src/Chat';
import Buddies from './src/Buddies';
import Expenses from './src/Expenses';
import Sidebar from './src/components/Sidebar';
import Profile from './src/Profile';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" title="root" >
          <Drawer
            key="sidebar"
            contentComponent={Sidebar}
            drawerIcon={<Icon name="ios-menu" />}
            drawerWidth={180}
            hideNavBar
          >
            <Tabs
              swipeEnabled
              activeBackgroundColor= '#A7DBD8'
              wrap
              title="test"
            >
              <Scene
                key="places"
                component={Places}
                panHandlers={null}
                icon={() => <Icon name="pin" />}
              />
              <Scene
                key="chat"
                component={Chat}
                icon={() => <Icon name="chatbubbles" />}
              />
              <Scene
                key="buddies"
                component={Buddies}
                icon={() => <Icon name="people" />}
              />
              <Scene
                key="expenses"
                component={Expenses}
                icon={() => <Icon name="cash" />}
              />
            </Tabs>

            <Scene
              key="trips"
              component={Trips}
              title="My Trips"
              panHandlers={null}
            />
          </Drawer>

          <Scene
            key="profile"
            component={Profile}
            title="UserNamePlaceholder"
          />
        </Stack>
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
