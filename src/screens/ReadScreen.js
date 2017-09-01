import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Button
} from 'react-native'

import { db, Folders } from '../data/sqlite'

class ReadScreen extends React.Component {
    state = {
        text: null,
    };

    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists folders (id integer primary key not null, title text not null);'
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: 'gray' }}>
                    <Folders />
                </View>
            </View>
        );
    }

    add(text) {
        db.transaction(
            tx => {
                tx.executeSql('insert into folders (title) values (?)', [text]);
                tx.executeSql('select * from folders', [], (_, { rows }) =>
                    console.log(JSON.stringify(rows))
                );
            },
            null,
            this.update
        );
    }

    update = () => {
        this.folders && this.folders.update();
    };
}
            
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: Expo.Constants.statusBarHeight,
    },
    readContainer: {
        flex: 1,
        paddingTop: 30
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