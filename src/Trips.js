import React from 'react';
import { StyleSheet, Modal, Dimensions, Text } from 'react-native';
import { Container,
        Header,
        Content,
        Card,
        CardItem,
        Body,
        View,
        Button,
        Icon,
        Fab,
        Item,
        Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Trips extends React.Component {
  constructor() {
    super();

    this.state = {
      showTripModal : false,
    };
  }

  toggleModal() {
    this.setState({showTripModal: !this.state.showTripModal,});
  }

  render() {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={ () => Actions.push("places")} >
              <Body>
                <Text>Trip placeholder</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <Fab
          active={true}
          containerStyle={{ fontSize: 30, }}
          style={{ backgroundColor: '#FA6900' }}
          position="bottomLeft"
          onPress={() => this.toggleModal()}>
          <Icon name="add" />
        </Fab>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showTripModal}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={{marginTop: 22,
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'stretch'}}>

            <View style={{ height: (deviceHeight/3),
                           backgroundColor: 'white',}}
            >
              <Item>
                <Input style={{marginVertical: (deviceHeight/10)}}
                      placeholder="Where are you going?" />
              </Item>

              <Button
                block light
                onPress={() => { this.toggleModal()}}
              >
                <Text>Done</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Container>
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

export default Trips;
