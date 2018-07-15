import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    if (value) {
      throw new Error(`Test error: ${value}`);
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Sentry example app</h1>
        </header>
        <p>Type some text and submit to throw an error</p>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
