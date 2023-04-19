import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Home from './screens/Home';
import Custom from './screens/Custom';
import Notes from './screens/Notes';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Custom'
        component={Custom}
      />
      <Stack.Screen
        name='Notes'
        component={Notes}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
      // flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      margin: '1em'
  },
});
