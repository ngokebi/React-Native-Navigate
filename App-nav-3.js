import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';
import MyCustomDrawer from './src/utils/customDrawer';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <MyCustomDrawer {...props} />} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Users" component={Users} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
