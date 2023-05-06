import axios from "axios";
axios.default;
import React, { useState, useEffect} from 'react';
import { StyleSheet,TextInput, View, Alert, Button} from 'react-native';

function UserDetailScreen({ navigation, route }) {
    const id = route.params.userId;
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("");

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = () => {
        axios.get(`http://192.168.43.124:3000/api/read/${id}`)
        .then(function (response) {
            // handle success
            setName(response.data.name)
            setPhone(response.data.phone)
            setAddress(response.data.address)
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    }

    const updateUser = (id) => {
     axios
        .put(`http://192.168.43.124:3000/api/update/${id}`, {
            name: name,
            phone: phone,
            address: address,
        })
        .then((response) => {
            console.log(response.data)
            Alert.alert("Success!", "Updated Successfully")
            navigation.navigate("Users");
        })
        .catch((error) => console.log(`Error: ${error}`));


    }

    openTwoButtonAlert=()=>{
        Alert.alert(
        'Delete User',
        'Are you sure?',
        [
            {text: 'Yes', onPress: () => deleteUser(id)},
            {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
        ],
        { 
            cancelable: true 
        }
        );
  }

    const deleteUser = (id) => {
      axios
        .delete(`http://192.168.43.124:3000/api/delete/${id}`)
        .then((response) => {
            console.log(response.data)
            Alert.alert("Success!", "User Deleted Successfully!");
            navigation.navigate("Users");
        })
        .catch((error) => console.log(`Error: ${error}`));

    }

return (
    <> 
         <View style={ styles.container }> 
            <TextInput
                style={styles.input}
                placeholder='Name'
                onChangeText={ setName }
                value={name}
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
            <Button title="Update"  color="#b180f0" onPress={() => updateUser(id)}/>
          </View>
          <View style={styles.Btn} >
          <Button title="Delete"  color="#f31282" onPress={openTwoButtonAlert}/>
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
    },

    
})

export default UserDetailScreen;