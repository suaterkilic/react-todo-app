import React from 'react';
import ReactDOM from 'react-dom';


const themes = {
    light: {
        foreground: '#fff',
        background: '#111'
    },
    dark: {
        foreground: '#333',
        background: '#000'
    }
}

const ThemeContext = React.createContext(themes.dark);

const ThemedButton = () => {
    return(
        <ThemeContext.Consumer>
            {
                value => (
                <button className="btn btn-primary">Change Theme {value.background}</button>
                )
            }
        </ThemeContext.Consumer>
    )
}

const ToolBar = () => (
    <ThemedButton />
)

export default class Context extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ThemeContext.Provider value={themes.dark}>
                    <ToolBar />
                </ThemeContext.Provider>
            </React.Fragment>
        )
    }
}