import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Button
} from 'react-native';
import { db } from '../data/sqlite';
import { Folders } from '../components';

class ReadScreen extends React.Component {
    state = {
        text: null,
    };
    
    static navigationOptions = {
        title: 'Heftir',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.readContainer}>
                    <Folders navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}
            
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    readContainer: {
        flex: 1,
        backgroundColor: '#F8C471'
    },
})

export { ReadScreen };