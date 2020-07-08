import React, { useReducer, useContext, Fragment } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import json from './portfolio.json';
import Resume from './components/Resume/Resume';
import "./App.css";


// import xmlUtil from './util/xmlUtil';
// import portfolio from './data/portfolio.xml';
// xmlUtil.load(portfolio, (json) => {console.log('json:', json)});


const initialState = {
    globals: {},
    projects: {}
};

const env = process && process.env && process.env.NODE_ENV;
console.log('env:', env);
const init = () => {
    // if (window && !(window.location.hostname === 'localhost' && window.location.port === '3000')) {
    if (env !== 'development') {        
        fetch('../public/portfolio.json').then((response) => {
            console.log('prod > response.json():', response.json());
            return {
                env: 'prod',
                ...response.json()
            };
        });
    } else {
        console.log('env > json:', json);
        return {
            location: 'dev',
            ...json
        };
    }
}
init();
const initialized = false;
function App() {
    // const [state, dispatch] = useReducer(AppReducer, initialState);
    // if !(initialized) {
        
    // }
    const state = initialState;
    return (
        <AppContext.Provider value={state}>
            <Resume />
            {/* <header className="Portfolio__header">
                <h1>Jonathan Elbom</h1>
                <h2>Crafted Experiences</h2>
                <p>
                    {
                        "With expertise in the design and implementation of Motion, Interaction, and UI, it is my delight to craft experiences that delight."
                    }
                </p>
            </header>
            <main className="Projects-wrapper">
                <div className="Projects"></div>
            </main> */}
            {/* <main class="Demos__toc"><div class="Demos__wrapper"></div></main> */}
        </AppContext.Provider>
    );
}

export default App;
