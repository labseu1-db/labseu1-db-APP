import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login/Login';
import ContextProvider from './Components/ContextProvider/ContextProvider';

export default function App() {
  return (
    <ContextProvider>
      <Login />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
