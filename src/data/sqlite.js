import Expo, { SQLite } from 'expo';

const db = SQLite.openDatabase({ name: 'folders.db' });

export { db };