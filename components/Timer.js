import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button, Dialog, CheckBox } from '@rneui/themed';

import DisplayTime from './DisplayTime.js';

let currentTimer = 0
export default function Timer({ randomize }){

  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  
  const [visible, setVisible] = useState(false)
  const [checked, setChecked] = useState(0);

  const options = [3, 5, 10];

  const updateTimer = useCallback(() => {
    if (running) {
      setSeconds((seconds) => seconds - 1);
      if (seconds === 0) {
        setSeconds(options[checked]);
        clearInterval(currentTimer);
        randomize();
      }
    }
  }, [running, seconds, options]);

  useEffect(() => {
    const currentTimer = setInterval(updateTimer, 1000);
    return () => clearInterval(currentTimer);
  }, [updateTimer]);

  const toggleDialog = () => {
    if(!running)
      setVisible(!visible);

    else if (running)
      setRunning(false); // stop the timer
      setSeconds(0); // reset the seconds to 0
    };

  const handlePress = useCallback(() => {
    if(!running)
      setRunning(!running);
  }, [running]);

  return (
    <View>
      <DisplayTime
        seconds={seconds}
      />
      <Button title={running ? 'Stop Timer' : 'Start Timer'} onPress={toggleDialog} />
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="Select Preference" />
        {options.map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i}
            onPress={() => setChecked(i)}
          />
        ))}

        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() => {
              console.log(`Option ${checked+1} was selected!`);
              toggleDialog();
              // sets the amount of seconds
              setSeconds(options[checked]);
              handlePress();
            }}
          />
          <Dialog.Button title="CANCEL" onPress={toggleDialog} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
