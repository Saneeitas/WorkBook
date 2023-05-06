import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from "./screens/Chat";
import Login from './screens/Login';
import Signup from './screens/Signup';
import RegisterScreen from './screens/RegisterScreen';
import ChatScreen from './screens/ChatScreen';


const Stack = createNativeStackNavigator();
  

export default function App() {

  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen
          name="Signup"
          component={Signup}
        />
      <Stack.Screen name='Chat' component={Chat} />
      <Stack.Screen name='Login' component={Login} /> 
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

