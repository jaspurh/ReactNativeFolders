import React from 'react';
import {  
    StackNavigator 
} from 'react-navigation';

import { 
    ReadScreen, 
    TextScreen,
    TextListScreen,
} from '../screens';

export const FolderStack = StackNavigator(
    {
        Read: {
            screen: ReadScreen
        },
        TextList: {
            screen: TextListScreen,
        },
        Text: {
            screen: TextScreen,
        },
    }
)