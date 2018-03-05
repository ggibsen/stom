import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        );
    }
}

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        if (!props || !props.title) {
            props = { title: 'default title (Hello World)'};
        }
        this.state = { title: props.title };
    }

    render() {
        return (
            <div className="HW-app">
                <header className="HW-app-header">
                    <h1>{this.state.title}</h1>
                </header>
            </div>
        );
    }
}

export default HelloWorld;

//TODO can you export 2+ classes in a file?
// export class App;
// export var e = 2.71828182846;
