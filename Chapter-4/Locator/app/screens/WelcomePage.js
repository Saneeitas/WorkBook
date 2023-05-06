import React from 'react';
import { Button } from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

function Login(props) {

    const handleSubmit = () => {
        console.log("Submit");
    }
    
    return (
            <View style={styles.container}>
               <Text style={styles.text}>Welcome</Text>
               <Text style={styles.text}>Todays Day is </Text>
               <Text style={styles.text}>Pic of Today</Text>
           
            
            <Button style={ styles.button } title='New Img' onPress={handleSubmit} />
            
            
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