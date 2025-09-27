import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000104' 
  },
  text:{
    color:'#B0FFB0',
    fontSize: 20
  }
});