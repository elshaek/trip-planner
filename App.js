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
import TabIcon from './src/components/TabIcon'


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
              showLabel={false}
            >
              <Scene
                key="places"
                component={Places}
                panHandlers={null}
                iconName="pin"
                icon={TabIcon}
              />
              <Scene
                key="chat"
                component={Chat}
                iconName="chatbubbles"
                icon={TabIcon}
              />
              <Scene
                key="buddies"
                component={Buddies}
                iconName="people"
                icon={TabIcon}
              />
              <Scene
                key="expenses"
                component={Expenses}
                iconName="cash"
                icon={TabIcon}
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
