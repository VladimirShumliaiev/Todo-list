import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.body.setAttribute('theme-data', theme)
    })

    const handleThem = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className={'App'}>
            <div className={'headerR'}>
                <button onClick={handleThem}>theme</button>
            </div>
            <div className={'headerL'}>
            </div>
            <div className={'n'}>
             f
            </div>
        </div>
    );
};

export default App;