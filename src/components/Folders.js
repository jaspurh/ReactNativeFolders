import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    List,
    ListItem,
} from 'react-native-elements'
import { db } from '../data/sqlite';

class Folders extends React.Component {
    state = {
        folders: null,
    };
    
        constructor(props) {
            super(props);
        }

    componentDidMount() {
        this.update();
    }

    render() {
        const { folders } = this.state;
        const { navigate } = this.props.navigation;

        if (folders === null || folders.length === 0) {
            return null;
        }

        return (
            <View style={styles.container}>
                <List containerStyle={styles.listItem}>
                    {
                        folders.map((folder) => (
                            <ListItem
                                key={folder.id}
                                title={folder.title}
                                onPress={
                                    () => navigate('TextList', { folder_id: folder.id })
                                }
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
                'select * from folders;',
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
    },
    listItem: {
        flex: 1,
        marginBottom: 20
    },
});

export { Folders };