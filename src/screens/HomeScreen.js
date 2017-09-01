import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    TextInput
} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
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
    logo: {
        paddingTop: 30
    },
    homeContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { HomeScreen };