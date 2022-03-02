import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

const MyCustomDrawer = props => {
  return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem
            label="Contact"
            onPress={() => alert('contact')}
            inactiveTintColor="green"
            style={{backgroundColor:"orange"}}
        />
      </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});

export default MyCustomDrawer;
