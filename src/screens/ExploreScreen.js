import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ExploreScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Notifs</Text>
            </View>
        )
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

export { ExploreScreen };