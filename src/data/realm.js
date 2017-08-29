// Not used as it is not supported by Expo
import Realm from 'realm';

class DayText extends Realm.Object { }
DayText.schema = {
    name: 'Text',
    properties: {
        header: {type: 'string'},
        date: {type: 'date'},
        referenedText: {type: 'string'},
        text: {type: 'string'}
    }
}

class TextList extends Realm.Object { }
TextList.schema = {
    name: 'TextList',
    properties: {
        name: {type: 'string'},
        description: {type: 'string'},
        creationDate: {type: 'date'},
        dayTexts: {type: 'list', objectType: 'DayText'}
    }
}

export default new Realm({schema: [DayText, TextList]});