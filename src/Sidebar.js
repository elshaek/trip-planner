import React from 'react';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Button
            transparent
            dark
            onPress={ () => Actions.push("trips")}
          >
            <Icon name="map" />
            <Text>Trips</Text>
          </Button>

          <Button
            transparent
            dark
            onPress={ () => Actions.push("profile")}
          >
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Sidebar;
