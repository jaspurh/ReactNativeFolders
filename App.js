import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Root } from './src/navigation/RootNavigator'

import { db, Folders } from './src/data/sqlite'

export default class App extends React.Component {
  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists folders (id integer primary key not null, title text not null);'
      );
      tx.executeSql(
        'create table if not exists folder_text (id integer primary key not null, folderid integer not null, author_id integer, header text not null, reference text, text_date date, text_body text);'
      );
      tx.executeSql(
        'create table if not exists author (id integer primary key not null, first_name text not null, last_name text);'
      );
    });
  }

  render() {


    return (
      <Root />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
