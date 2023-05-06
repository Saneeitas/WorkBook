import React, { useState } from 'react';
import { StyleSheet,Text, View, TouchableOpacity   } from 'react-native';


 function Excercise2() {

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }


  return (
    <View style={styles.container}>
      
      <Text style={styles.count}>
          {count}
      </Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.plusbutton} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusbutton} onPress={handleSubtract}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  plusbutton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  minusbutton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  count: {
    fontSize: 150,
    fontWeight: "bold"
  }
  
});

export default Excercise2;
