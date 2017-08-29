import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native'

class TextScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.conetnContainer}>
                    <Text>Text</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
  contentContainer: {
    paddingTop: 30
  },
  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { TextScreen };