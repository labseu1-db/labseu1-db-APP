import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



let Login = () => {
    return (
        <View style={styles.View}>
            <Text>Login</Text>
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