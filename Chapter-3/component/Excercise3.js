
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function Excercise3() {
  
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  const handleDigitPress = (digit) => {
    let newDisplay = display;
    if (newDisplay === '0') {
      newDisplay = digit;
    } else {
      newDisplay += digit;
    }
    setDisplay(newDisplay);
    if (operator === '') {
      setFirstNumber(newDisplay);
    } else {
      setSecondNumber(newDisplay);
    }
  };

  const handleOperatorPress = (newOperator) => {
    if (operator !== '' && secondNumber !== '') {
      handleEquals();
      setOperator(newOperator);
      setDisplay(firstNumber);
      setSecondNumber('');
    } else {
      setOperator(newOperator);
      setDisplay('0');
    }
  };

  const handleEquals = () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '/':
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setFirstNumber(result.toString());
    setOperator('');
    setSecondNumber('');
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber('');
    setOperator('');
    setSecondNumber('');
  };
 
  return (
       <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{display}</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <View style={ styles.rowContainer }>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('7')}>
                <Text style={styles.text}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('8')} >
                <Text style={styles.text}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('9')} >
                <Text style={styles.text}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleOperatorPress('/')}>
                <Text style={styles.text}>/</Text>
              </TouchableOpacity>
        </View>
         <View style={ styles.rowContainer }>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('4')}>
                <Text style={styles.text}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('5')} >
                <Text style={styles.text}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('6')}>
                <Text style={styles.text}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleOperatorPress('*')}>
                <Text style={styles.text}>*</Text>
              </TouchableOpacity>
        </View>
         <View style={ styles.rowContainer }>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('1')}>
                <Text style={styles.text}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('2')} >
                <Text style={styles.text}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('3')}>
                <Text style={styles.text}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleOperatorPress('+')} >
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
        </View>
         <View style={ styles.rowContainer }>
              <TouchableOpacity style={ styles.btn } onPress={handleClear}>
                <Text style={styles.text}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleDigitPress('0')} >
                <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={handleEquals} >
                <Text style={styles.text}>=</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ styles.btn } onPress={() => handleOperatorPress('-')}>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
        </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  buttonsContainer: {
    flex: 5,
    backgroundColor: 'black',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  btn: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  resultText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },
  calculationText: {
    fontSize: 24,
    color: 'black'
  }
 
});

export default Excercise3;