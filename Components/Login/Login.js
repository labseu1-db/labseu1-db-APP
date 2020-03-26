import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Text} from 'react-native';
import {Context} from '../ContextProvider/ContextProvider'



let Login = () => {
    // Context Api
    const {firebase, getFirestoreDataWithWhere, saveToLocalStorage, setError} = React.useContext(Context)



    // Hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    // function
    const login = async (email, password) => {
        console.log(email)
        try {
          let {user} = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
          getFirestoreDataWithWhere({
            collection: 'users',
            SearchTerm: 'userEmail',
            data: user.email,
            type: 'SAVE_ID',
            items: {key: 'uuid'},
            function: saveToLocalStorage
          });
        } catch (error) {
          setError(error)
        }
    };


    return (
        <View style={styles.View}>
            <TextInput value={email} placeholder="Email" autoCompleteType="email" onChangeText={(e) => setEmail(e)} autoCapitalize='none'/>
            <TextInput value={password} placeholder="Password" autoCompleteType="password" secureTextEntry={true} onChangeText={(e) => setPassword(e)} autoCapitalize='none'/>
            <Button title="Login" onPress={() => login(email, password)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})


export default Login;