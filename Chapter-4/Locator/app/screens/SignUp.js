import React, { useState } from 'react';
import { Button } from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

function Login(props) {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = () => {
        

        fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          fullname: fullname,
          email: email,
          phone: phone,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Showing response message coming from server 
          console.warn(responseJson);
          console.log(response);
        })
        .catch((error) => {
        //display error message
         console.warn(error);
        });
    }

    return (
            <View style={styles.container}>
               <Text style={styles.text}>SignUp</Text>
            <TextInput
                style={styles.input}
                placeholder='Fullname'
                onChangeText={setFullname}
                
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={setEmail}/>
             <TextInput
                style={styles.input}
                placeholder='Phone'
                onChangeText={setPhone}/>
             <TextInput
                style={ styles.input }
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={setPassword}/>
            
            <Button style={ styles.button } title='Register' onPress={handleRegister} />
            
            
            </View>
            
        
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        marginBottom: 12
    },
    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 12,
        marginBottom: 12
    },
    button: {
        width: "70",
        margin: 12
    },
    text: {
        marginBottom: 12,
        fontSize: 20,
        fontWeight: "bold"
    }

    
})

export default Login;