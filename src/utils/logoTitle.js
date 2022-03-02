import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import Logo from '../images/paypal-logo.png';

const LogoTitle = () => {

  return (

      <Image
          source={Logo}
          style = {styles.image}
      />

  );
};

const styles = StyleSheet.create({
image: {
    width: 50,
    height: 50,
}
});

export default LogoTitle;
