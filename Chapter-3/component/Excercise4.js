
import { useState } from 'react';
import { StyleSheet, View, Text,Button,TextInput } from 'react-native';


function Excercise4() {
  const [base1, setBase1] = useState('');
  const [base2, setBase2] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');

  const calculateArea = () => {
    const b1 = parseFloat(base1);
    const b2 = parseFloat(base2);
    const h = parseFloat(height);
    const result = ((b1 + b2) * h) / 2;
    setArea(result.toFixed(2));
  };

  
  return (
      <View style={styles.container}>
      <Text style={styles.label}>Base 1:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setBase1}
        value={base1}
      />
      <Text style={styles.label}>Base 2:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setBase2}
        value={base2}
      />
      <Text style={styles.label}>Height:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setHeight}
        value={height}
      />
      <Button title="Calculate" onPress={calculateArea} />
      {area !== '' && (
        <Text style={styles.result}>
          The area of the trapezium is {area} units²
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
});



export default Excercise4;