import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { db } from '../data/sqlite';

class FolderText extends React.Component {
    state = {
        folder_text: null,
    };

    componentDidMount() {
        this.update();
    }

    render() {
        const { folder_text } = this.state;
        if (folder_text === null || folder_text.length === 0) {
            return null;
        }
        console.log("folder_text: " + JSON.stringify(folder_text))

        return (
            <ScrollView style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.textHeader}>{ folder_text[0].header}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.textDate}>{ folder_text[0].text_date}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.textReference}>{ folder_text[0].reference}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.textBody}>{ folder_text[0].text_body}</Text>
                </View>
            </ScrollView>
        );
    }

    update() {
        db.transaction(tx => {
            tx.executeSql(
                `select * from folder_text where id = ?;`,
                [this.props.text_id],
                (_, { rows: { _array } }) => this.setState({ folder_text: _array })
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
    contentContainer: {
        flex: 1,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textDate: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    textReference: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    textBody: {
        fontSize: 17,
    }
});

export { FolderText };