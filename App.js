import { StatusBar } from 'expo-status-bar';
import {ImageHolder} from './components/ImageHolder/ImageHolder'
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column'}}>
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} >
          <Image style={{width: '51%', height: '100%'}} source={require('./components/ImageHolder/img/bone.png')} />
        </View>
        <View style={{height: 50, backgroundColor: 'steelblue'}} >
        <Text>Sneak nugg</Text>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
