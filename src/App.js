import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle onToggle={this.handleToggle} >
          <Toggle.On> The button is on </Toggle.On>
          <Toggle.Button />
          <Toggle.Off> The button is off </Toggle.Off>
        </Toggle>
      </div>
    );
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App;
