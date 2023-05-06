import {app} from "../config/firebasee"

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    app.database().ref(`users/${phone}`).set({ name });
    navigation.navigate('Chat', { name, phone });
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
