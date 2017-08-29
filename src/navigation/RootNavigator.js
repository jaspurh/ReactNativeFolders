import React from 'react';
import { Platform } from 'react-native';
import { 
    TabNavigator, 
    StackNavigator 
} from 'react-navigation';
import { Icon } from 'react-native-elements'
import { 
    HomeScreen, 
    ReadScreen, 
    ExploreScreen, 
    TextScreen, 
    ProfileScreen, 
    MoreScreen
} from '../screens';

export const ContentStack = StackNavigator(
    {
        ContentSc: {
            screen: ReadScreen
        },
        TextSc: {
            screen: TextScreen,
        },
    }
)

export const Tabs = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
                tabBarLabel: "Heim",
                tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={ tintColor }/>
            },
        },
        Read: {
            screen: ReadScreen,
            navigationOptions: {
                header: null,
                tabBarLabel: "Les",
                tabBarIcon: ({ tintColor }) => <Icon name="subject" size={35} color={ tintColor }/>
            },
        },
        Explore: {
            screen: ExploreScreen,
            navigationOptions: {
                header: null,
                tabBarLabel: "Finn",
                tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={ tintColor }/>
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null,
                tabBarLabel: "Profilur",
                tabBarIcon: ({ tintColor }) => <Icon name="person" size={35} color={ tintColor }/>
            },
        },
        More: {
            screen: MoreScreen,
            navigationOptions: {
                header: null,
                tabBarLabel: "Meir",
                tabBarIcon: ({ tintColor }) => <Icon type="ionicon" name="ios-more" size={35} color={ tintColor }/>
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
        },
    }
)

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    },
    {
        mode: 'modal',
        headerMode: 'none,'
    }
);