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


class FolderTexts extends React.Component {
    state = {
        folder_texts: null,
    };

    componentDidMount() {
        this.update();
    }

    render() {
        const { folder_texts } = this.state;
        const { navigate } = this.props.navigation;

        if (folder_texts === null || folder_texts.length === 0) {
            return null;
        }

        return (
            <View style={styles.container}>
                <List containerStyle={{ marginBottom: 20 }}>
                    {
                        folder_texts.map((folder_text) => (
                            <ListItem
                                key={folder_text.id}
                                title={folder_text.header}
                                onPress={
                                    () => navigate('Text', { text_id: folder_text.id })
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
                'select * from folder_text where folderid = ?;',
                [this.props.navigation.state.params.folder_id],
                (_, { rows: { _array } }) => this.setState({ folder_texts: _array })
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
});

export { FolderTexts };