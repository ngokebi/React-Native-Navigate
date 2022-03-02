import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Home = props => {
  // console.log(props);
  return (
    <View style={styles.home}>
      {/* <Text>Home Screen</Text> */}
      {/* <Text>{
        props.route.params ? 
        props.route.params.active:null}</Text>
      <Button
        title="Go to Users"
        onPress={() => props.navigation.navigate('Users',{
          id:23
        })}
      /> */}
      <Button
        title="Go to Home Settings"
        onPress={() => props.navigation.navigate('Home_Settings')}
      />
      <Button
        title="Go to Home Posts"
        onPress={() => props.navigation.navigate('Home_Posts')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
