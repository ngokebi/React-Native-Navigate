import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import 'react-native-gesture-handler';

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';

const Stack = createNativeStackNavigator();
const defaultHeader = {
  headerTitleAlign: 'center',
  headerBackTitle: 'rock',
  headerStyle: {
    backgroundColor: 'orange',
    borderBottomWidth: 6,
    borderBottomColor: 'green',
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: '300',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        mode="modal"
        screenOptions={{
          ...defaultHeader,
          headerTitle: props => LogoTitle(props),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Users"
          component={Users}
          initialParams={{id: 1, codeName: 'Iron Hill'}}
          options={
            ({navigation}) => ({
                headerLeft: () => <Button
                  title='Back'
                  onPress={() => navigation.navigate('Home')}
                />,
            })
            //   {
            //   headerLeft: () => <Button
            //     title='do less'
            //     onPress={() => alert('do less')}
            //   />,
            //   headerRight: () => <Button
            //     title='do more'
            //     onPress={() => alert('do more')}
            //   />
            //   // headerTitle: props => LogoTitle(props),
            //   // title: 'x-user',
            // }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
