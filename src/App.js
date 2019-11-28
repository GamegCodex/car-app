import React { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Car {
    constructor(mark) {
        this.mark = mark;
    }

    present() {
        return 'Auton merkki ' + this;
    }
}

class App extends Component {
    // final list carList

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


    render() {
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
                            [<a href href="https:www.audi.com">Audi</a>, <a href href="https:www.bmw.com">BMW</a>, <a href href="https:www.citroen.com">Citroen</a>].map(function (item) {
                                return <li key={item}>{item}</li>
                            })}
                    </ul>
                    {mycar.present()}
                </header>
            </div>
        );
    }
}

export default App;
