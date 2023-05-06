import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetailScreen from './app/screens/UserDetailScreen';
import UserScreen from './app/screens/UserScreen';
import AddUserScreen from './app/screens/AddUserScreen';

const Stack = createNativeStackNavigator();
  

export default function App() {

  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AddUserScreen}
        />
        <Stack.Screen
          name="Users"
          component={UserScreen}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

