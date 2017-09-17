import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native'
import { FolderTexts } from '../components';
import { Icon } from 'react-native-elements'

class TextListScreen extends React.Component {
    static navigationOptions = {
        title: 'Tekstir',
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                    <FolderTexts navigation={this.props.navigation} />
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
})

export { TextListScreen };