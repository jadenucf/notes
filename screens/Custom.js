import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import { Button, ButtonGroup  } from '@rneui/themed';
import { styles } from '../App';
import { StatusBar } from 'expo-status-bar';


export default function Custom({navigation}) {
  const letters = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G','G#', 'A', 'A#', 'B']

    // state variable multiple answers
    const [choicesIndex, setChoicesIndex] = useState([])
    const [choices, setChoices] = useState([])

    const handlePress = (index) =>{
      setChoicesIndex((prevIndex) => [...prevIndex, index])
      setChoices((prevIndex) => [...prevIndex, letters[index]])

      // console.log(choicesIndex)
      console.log(choices)

      // if the user wants to deselect an answer
      if(choicesIndex.includes(index)) {
        setChoicesIndex((choicesIndex) => {
          return choicesIndex.filter(item => item !== index)
        })
        setChoices((choices) => {
          return choices.filter(item => item !== letters[index])
        })
      }
    }



  return (
    <View style={styles.container}>
      <Text>hmm</Text>
      <ButtonGroup
        buttons={letters}
        selectedIndexes={choicesIndex}
        containerStyle={{ marginBottom: 20 }}
        onPress={(value) => handlePress(value)}
      />
      <Button
        title='Next'
        onPress={()=>{
          navigation.navigate('Notes',{
            letters: choices
          })
        }}
        disabled={(choices.length <= 1) ? true : false}
      />
      <StatusBar style="auto" />
    </View>
  )
}

          // <ButtonGroup
          //   buttons={letters}
          //   selectedIndexes={choicesIndex}
          //   onPress={(value)=>{
          //     handlePress(value)
          //   }}
          // />