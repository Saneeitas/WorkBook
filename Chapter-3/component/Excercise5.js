
import { useState } from 'react';
import { StyleSheet, View, Text,Button,TextInput } from 'react-native';


function Excercise5() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState('');

  const calculateVolume = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);
    const v = Math.PI * r * r * h;
    setVolume(v.toFixed(2));
  };

  
  return (

    <View style={styles.container}>
      <Text>Radius:</Text>
      <TextInput
        value={radius}
        onChangeText={setRadius}
        keyboardType="numeric"
        style={styles.input}
      />
      <Text>Height:</Text>
      <TextInput
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Calculate" onPress={calculateVolume} />
      <Text>Volume: {volume}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#cccccc",
    width: "70%",
    padding: 12,
    marginBottom: 12
    },
});

export default Excercise5;