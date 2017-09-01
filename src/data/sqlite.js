import Expo, { SQLite } from 'expo';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    FlatList,
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

const db = SQLite.openDatabase({ name: 'folders.db' });

class Folders extends React.Component {
    state = {
        folders: null
    };

    constructor() {
        super();
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }

    componentDidMount() {
        this.update();
    }

    _renderItem = ({ item }) => (
        <ListItem
            key={item.id}
            title={item.title}
        />
    );


    render() {
        const { folders } = this.state;
        if (folders === null || folders.length === 0) {
            return null;
        }

        return (
            <View style={styles.container}>
                <List containerStyle={{ marginBottom: 20 }}>
                    {
                        folders.map((item, id) => (
                            <ListItem
                                key={id}
                                title={item.title}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }

    update() {
        db.transaction(tx => {
            tx.executeSql(
                `select * from folders;`,
                null,
                (_, { rows: { _array } }) => this.setState({ folders: _array })
            );
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Expo.Constants.statusBarHeight,
    }
});

export { db, Folders };