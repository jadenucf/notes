import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button,} from '@rneui/themed';
import { styles } from '../App';
import { StatusBar } from 'expo-status-bar';

import { useScore } from 'react-native-vexflow'; // import the one and only thing provided
import Vex from 'vexflow'

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

  
  const { StaveNote, Accidental, Formatter, Voice } = Vex.Flow;

  const [context, stave] = useScore({
		contextSize: { x: 300, y: 300 }, // this determine the canvas size
		staveOffset: { x: 5, y: 5 }, // this determine the starting point of the staff relative to top-right corner of canvas
		staveWidth: 250, // ofc, stave width
		clef: 'treble', // clef
		timeSig: '4/4', // time signiture
	});

	// you got your context, you got your stave, you can do your stuff now

  // .addAccidental(0, new Accidental('#')),
	console.log(displayLetter)

	let notes;

  (displayLetter.includes('#'))
    ? notes = [
      new StaveNote({ clef: 'treble', keys: [`${displayLetter}/4`], duration: 'q' }).addAccidental(0, new Accidental('#')),
    ]

    : notes = [
      new StaveNote({ clef: 'treble', keys: [`${displayLetter}/4`], duration: 'q' })
    ]


  	// Create a voice in 4/4 and add the notes from above
    const voice = new Voice().setStrict(false).addTickables(notes);
    const formatter = new Formatter().joinVoices([voice]).format([voice], 200);

    // Render voice
    voice.draw(context, stave);



  return (
    <View style={styles.container}>
      {context.render()}
      <Button
        title='Randomize'
        onPress={handlePress}
      />
      <StatusBar style="auto" />
    </View>
  )
}




