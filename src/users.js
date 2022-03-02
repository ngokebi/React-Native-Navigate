import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import { useDrawerStatus } from '@react-navigation/drawer';

const Users = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, codeName} = route.params;
  const isDrawerOpen = useDrawerStatus();

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button title="Do That" onPress={() => alert('meme')} />
        ),
      });
    }, 2000);
  }, [navigation]);

  // alert(isDrawerOpen);
  return (
    <View style={styles.user}>
      <Text>ID: {id}</Text>
      <Text>CodeName: {codeName}</Text>
      <Button
        title="Go Back"
        onPress={() =>
          navigation.navigate('Home', {
            active: 'yes',
          })
        }
      />
      <Button
        title="change header"
        onPress={() =>
          navigation.setOptions({
            title: 'something else',
          })
        }
      />
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Users;
