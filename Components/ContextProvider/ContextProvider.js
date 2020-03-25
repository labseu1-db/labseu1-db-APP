import React, {Component, createContext} from 'react';

const Context = createContext()

class ContextProvider extends Component {
    render() {
        const {children} = this.props;
        console.log(children)
        return (
            <Context.Provider>
                {children}
            </Context.Provider>
        )
    }
}


export default ContextProvider;