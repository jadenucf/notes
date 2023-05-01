import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button,} from '@rneui/themed';

import { useScore } from 'react-native-vexflow'; // import the one and only thing provided
import Vex from 'vexflow'


export default function Staff({displayLetter}){


  const { StaveNote, Accidental, Formatter, Voice } = Vex.Flow;

  const [context, stave] = useScore({
		contextSize: { x: 300, y: 300 }, // this determine the canvas size
		staveOffset: { x: 5, y: 5 }, // this determine the starting point of the staff relative to top-right corner of canvas
		staveWidth: 250, // ofc, stave width
		clef: 'treble', // clef
		timeSig: '4/4', // time signiture
	});


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
    <View>
      {context.render()}
    </View>
  )
}
