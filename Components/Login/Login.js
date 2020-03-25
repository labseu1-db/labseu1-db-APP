import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';
import {Context} from '../ContextProvider/ContextProvider'



let Login = () => {
    const value = React.useContext(Context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.View}>
            <TextInput placeholder="Email" autoCompleteType="email" onChangeText={(e) => setEmail(e)} autoCapitalize='none'/>
            <TextInput placeholder="Password" autoCompleteType="password" secureTextEntry={true} onChangeText={(e) => setPassword(e)} autoCapitalize='none'/>
            <Button title="Login"/>
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