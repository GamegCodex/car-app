import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const meta = {
        charset: 'utf-8'
    };
    const carList = [
        {
            mark: 'Audi',
            model: 'A6'
        },
        {
            mark: 'BMW',
            model: '320i'
        },
        {
            mark: 'Citroen',
            model: 'CX'
        }
    ];
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="http://www.gameg.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Marko duunissa
        </a>
                <ul>
                    {
                        ['Audi', 'BMW', 'Citroen'].map(function (item) {
                            return <li key={item}>{item}</li>
                        })}
                </ul>
            </header>
        </div>
    );
}

export default App;
