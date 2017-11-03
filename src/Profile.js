import React from 'react';
import { Container, Header, Left, Content, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              dark
              onPress={ () => Actions.pop() }
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content>
          <Text>Profile page</Text>
        </Content>
      </Container>
    );
  }
}

export default Profile;
