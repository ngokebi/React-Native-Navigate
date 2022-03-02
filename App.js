import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/home';
import Users from './src/users';

// - HOME
// .setting
// .posts

// USERS
// .setting
// .profile

// - POST

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home_Settings">
        {props => <Text>Home Settings</Text>}
      </Stack.Screen>
      <Stack.Screen name="Home_Posts">
        {props => <Text>Home Posts</Text>}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function UserTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen name="Users_Settings">
        {props => <Text>Users Settings</Text>}
      </Tab.Screen>
      <Tab.Screen name="Users_Profile">
        {props => <Text>Users Profile</Text>}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Users"
          component={UserTab}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Posts" options={{headerShown: false}}>
          {props => <Text>Posts Main</Text>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
