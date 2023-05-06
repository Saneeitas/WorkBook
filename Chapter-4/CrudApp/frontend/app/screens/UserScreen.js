import axios from "axios";
axios.default;
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

FlatListItemSeparator = () => {
    return (
        <View
            style={ {
                height: 1,
                width: "100%",
                backgroundColor: "#ccc",
            }}
        />
    )
}


function UserScreen({navigation}) {
    const [users, setUsers] = useState("");

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('http://192.168.43.124:3000/api/read')
        .then(function (response) {
            // handle success
            setUsers(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    }

    return (
      
        <View style={ styles.container }>        
            <FlatList 
                ItemSeparatorComponent={FlatListItemSeparator}
                data={ users }
                renderItem={ ({ item, index }) => (
                    <View>
                         <TouchableOpacity  onPress={ () => navigation.navigate("UserDetails", {
                              userId: item._id
                          })}>
                        <Text style={ styles.item }>
                            { index + 1 }- Name: { item.name } Phone: { item.phone } Address: { item.address }
                            </Text>
                        </TouchableOpacity>
                     </View>
                )
                }
                ListHeaderComponent={ () => (
                  <TouchableOpacity onPress={() => getUsers()}>
                        <Text style={ styles.header }>List of Users</Text>
                   </TouchableOpacity> 
                ) }
                keyExtractor={ (item) => item._id }
                />
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        
    },
     buttonContainer: {
        flexDirection: "row",
         marginTop: 0,
        justifyContent: "center",
    },
    item: {
        padding: 20,
        fontSize: 20,
        marginTop: 5,
        color: "black"
        
    },
    header: {
        fontSize: 25,
        textAlign: "center",
        marginTop: 20,
        fontWeight: "bold",
        textDecorationLine: "underline"
    }

    
})

export default UserScreen;