import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button,} from '@rneui/themed';
import { styles } from '../App';
import { StatusBar } from 'expo-status-bar';


export default function Notes({navigation, route}) {

  const { letters } = route.params
  // console.log(letters)
  let max = letters.length 
  // randomize
  let randomIndex = Math.floor(Math.random() * max);

  const [seconds, setSeconds] = useState(0)
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
      <Text>{displayLetter}</Text>
      <Button
        title='Randomize'
        onPress={handlePress}
      />
      <StatusBar style="auto" />
    </View>
  )
}

