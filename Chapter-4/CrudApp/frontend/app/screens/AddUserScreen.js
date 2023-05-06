import axios from "axios";
axios.defaults;
import React, { useState, useEffect} from 'react';
import { StyleSheet, TextInput, View, Alert,Button} from 'react-native';

function AddUserScreen({navigation}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("");

    const handleSubmit = () => {
      
       axios.post('http://192.168.43.124:3000/api/create', {
           name: name,
           phone: phone,
           address: address,
        })
        .then(function (response) {
            console.log(response.status);
            if (response.status === 200) {
                //Alert.alert("Success!", "User Added!")
                setName("")
                setPhone("")
                setAddress("")

                navigation.navigate("Users")
            }
        })
        .catch(function (error) {
            console.log(error.response.status);
             if (error.response.status === 400) {
                Alert.alert("Error!", "Inputs cannot be empty")
            }
        });    
    }

    return (
    <>     
         <View style={ styles.container }>
            
            <TextInput
                style={styles.input}
                placeholder='Name'
                onChangeText={ setName }
                    value={ name }
                    keyboardType="default"
                
            />
             <TextInput
                style={styles.input}
                placeholder='Phone'
                onChangeText={ setPhone }
                    value={ phone }
                    keyboardType="phone-pad"
                
            />
            <TextInput
                style={styles.input}
                placeholder='Address'
                onChangeText={ setAddress }
                    value={ address }
                    keyboardType="default"
                 />
          
        <View style={styles.buttonContainer}>
            <View style={styles.Btn}>
            <Button title="Add User"  color="#b180f0" onPress={() => handleSubmit()}/>
          </View>
          <View style={styles.Btn} >
          <Button title="Get Users"  color="#f31282" onPress={() => navigation.navigate("Users")}/>
          </View> 
         </View>
        </View> 
            
       </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100,
        
    },
    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 10,
        width: "70%",
        padding: 12,
        marginBottom: 12
    },
    buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },

  Btn: {
    width: "30%",
    marginHorizontal: 8
  }
    
})

export default AddUserScreen;