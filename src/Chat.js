import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat page</Text>
      </View>
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

export default Chat;
