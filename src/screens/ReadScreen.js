import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Button
} from 'react-native'

class ReadScreen extends React.Component {
    static navigationOptions = {
        title: 'Content',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                        <View style={[styles.conentContainer, styles.readBanner]}>
                            <Text>Banner Text</Text>
                        </View>
                        <View style={[styles.conentContainer, styles.readHeader]}>
                            <Text>Header 1</Text>
                        </View>
                        <View style={[styles.conentContainer, styles.readList]}>
                            <Button
                                title="Go To text"
                                onPress={() => navigate('TextSc', {})}
                            />
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
        justifyContent: 'center'
    },
    readContainer: {
        flex: 1,
        paddingTop: 30
    },
    readContainer: {
        flex: 1
    },
    readBanner: {
        flex: 3,
        backgroundColor: '#FAE5D3',
    },
    readHeader: {
        flex: 1,
        backgroundColor: '#FEF5E7',
    },
    readList: {
        flex: 5,
        backgroundColor: '#F8C471',
    }
})

export { ReadScreen };