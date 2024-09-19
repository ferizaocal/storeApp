import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Error() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/error.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 150,
    height: 150,
  },
});
