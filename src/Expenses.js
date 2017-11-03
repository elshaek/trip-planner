import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Expenses extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Expenses page</Text>
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

export default Expenses;
