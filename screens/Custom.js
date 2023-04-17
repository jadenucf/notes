import React from 'react';
import { Text, View, } from 'react-native';
import { Button } from '@rneui/base';
import { styles } from '../App';
import { StatusBar } from 'expo-status-bar';


export default function Custom({navigation}) {

  return (
    <View style={styles.container}>
      <Text>NOW WORK</Text>
      <Button 
        title='C'
      />
      <StatusBar style="auto" />
    </View>
  )
}

