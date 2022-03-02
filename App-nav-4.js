import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';
import MyCustomDrawer from './src/utils/customDrawer';
import Logo from './src/images/paypal-logo.png';
import Logo_Red from './src/images/paypal-logo-red.png';

const CustomTabBar = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Button title="Home" />
      <Button title="User" />
    </View>
  );
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBar={props => <CustomTabBar {...props}/>}
        screenOptions={{
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return focused ? (
                <Image source={Logo} style={{width: 50, height: 50}} />
              ) : (
                <Image source={Logo_Red} style={{width: 50, height: 50}} />
              );
            }
          },
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'green',
            size: 30,
          },
          tabBarActiveTintColor: 'grey',
          tabBarActiveBackgroundColor: 'orange',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Users" component={Users} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
