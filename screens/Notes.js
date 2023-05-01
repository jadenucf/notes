import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button,} from '@rneui/themed';
import { styles } from '../App';
import { StatusBar } from 'expo-status-bar';

import { useScore } from 'react-native-vexflow'; // import the one and only thing provided
import Vex from 'vexflow'

import Staff from '../components/Staff.js'
import Timer from '../components/Timer';


export default function Notes({navigation, route}) {

  const { letters } = route.params
  // console.log(letters)
  let max = letters.length 
  // randomize
  let randomIndex = Math.floor(Math.random() * max);

  const [displayLetter, setDisplayLetter] = useState(letters[randomIndex])


  function handlePress() {
    let randomIndex = Math.floor(Math.random() * max);

    // Avoid repeats
    while (displayLetter === letters[randomIndex]) {
      randomIndex = Math.floor(Math.random() * max);
    }
    setDisplayLetter(letters[randomIndex]);
  }

  

  return (
    <View style={styles.container}>
      <Staff
        displayLetter={displayLetter}
      />
      <Timer
        randomize={handlePress}
      />
      <Button
        title='Randomize'
        onPress={handlePress}
      />
      <StatusBar style="auto" />
    </View>
  )
}




