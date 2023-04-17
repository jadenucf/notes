import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button, ButtonGroup } from '@rneui/base';
import { styles } from '../App';
import { StatusBar } from 'expo-status-bar';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Pick the preset</Text>
      <Button 
        title='Custom'
        onPress={() =>{
          navigation.push('Custom')
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

