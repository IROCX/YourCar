import React from 'react';
import './App.css';
import HomePage from "./app/containers/HomePage";

const AppContainer = ({children}: any) => {
    return (
        <div className={"w-full h-full flex flex-col"}>
            {children}
        </div>
    )
}

function App() {
    return (
        <AppContainer>
            <HomePage/>
        </AppContainer>
    );
}

export default App;
