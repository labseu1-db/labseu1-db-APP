import React, {Component, createContext} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../Firebase/firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const Context = createContext()

const db = firebase.firestore()

class ContextProvider extends Component {
    render() {
        const {children} = this.props;
        return (
            <Context.Provider value={{db: db}}>
                {children}
            </Context.Provider>
        )
    }
}


export default ContextProvider;