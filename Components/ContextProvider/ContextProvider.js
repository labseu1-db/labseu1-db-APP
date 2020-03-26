import React, {Component, createContext} from 'react';
import {AsyncStorage, Linking, StyleSheet} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from '../../Firebase/firebaseConfig';


// handle atob warning in console
import {decode, encode} from 'base-64';

if (!global.btoa) {
    global.btoa = encode;
  }
  
  if (!global.atob) {
    global.atob = decode;
  }

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const Context = createContext()

const db = firebase.firestore()

class ContextProvider extends Component {
    state = {
        loading: false,
        error: null,
    }
    saveToLocalStorage = async ({key, value}) =>  {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        this.setError(error);
      }
    }
    getLocalStorage = async (key) => {
      try {
        let data = await AsyncStorage.getItem(key)
        return data;
      } catch(error) {
        this.setError(error)
      }
    }
    setError = error => {
      this.setState({error: error});
    }
    /// WIP
    // register = () => {
    //     Linking.openURL('https://pinely.app/register')
    // }
    getFirestoreDataWithWhere = async request => {
        try {
          let ref = db
            .collection(request.collection)
            .where(request.SearchTerm, '==', request.data);
          let querySnapshot = await ref.get();
          await querySnapshot.forEach(doc => {
            if (request.type === 'SAVE_ID') {
              request.function({...request.items, value: doc.id})
            } else  {
              request.function({...request.items, value: doc.data()})
            }
          });
        } catch (error) {
          this.setError(error)
        }
      };
    render() {
        const {children} = this.props;
        return (
            <Context.Provider value={{firebase: firebase, getFirestoreDataWithWhere: this.getFirestoreDataWithWhere, saveToLocalStorage: this.saveToLocalStorage, setError: this.setError}}>
                {children}
            </Context.Provider>
        )}
}

const styles = StyleSheet.create({
    Browser: {
        marginTop: 20
    }
})

export default ContextProvider;