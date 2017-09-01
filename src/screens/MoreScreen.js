import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';

class MoreScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}
                            contentContainerStyle={styles.contentContainer}>
                    <View style={styles.homeContainer}>
                        <Text>Meir</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Expo.Constants.statusBarHeight,
  },
  contentContainer: {
    paddingTop: 30
  },
  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 

export { MoreScreen };