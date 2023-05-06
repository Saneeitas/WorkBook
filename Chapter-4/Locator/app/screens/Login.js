import React from 'react';
import { Button } from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log("Login");
    }
    return (
            <View style={styles.container}>
                <Image style={ styles.image } source={ require("../assets/auk.png") } />
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={ true }
              onChangeText={setPassword}/>
            
            <Button style={ styles.button } title='Login' onPress={handleLogin}/>
            
            <Text style={styles.text}>Version 1.00</Text>
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
        marginTop: 100
    }

    
})

export default Login;