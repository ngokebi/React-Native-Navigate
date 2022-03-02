import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Users = () => {
  const navigation = useNavigation();
  // const route = useRoute();
  // const {id, codeName} = route.params;

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button title="Do That" onPress={() => alert('meme')} />
        ),
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.user}>
      {/* <Text>ID: {id}</Text>
      <Text>CodeName: {codeName}</Text> */}
      {/* <Button
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
      /> */}
      <Button
        title="go to Users Settings"
        onPress={() => navigation.navigate('Users_Settings')}
      />
      <Button
        title="go to Users Profile"
        onPress={() => navigation.navigate('Users_Profile')}
      />
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
