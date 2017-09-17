import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native'
import { FolderText } from '../components';

class TextScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.conetnContainer}>
                    <FolderText text_id={this.props.navigation.state.params.text_id} />
                </ScrollView>
            </View>
        );
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
})

export { TextScreen };