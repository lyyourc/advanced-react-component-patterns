import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle onToggle={this.handleToggle} >
          <div>
            <Toggle.On> The button is on </Toggle.On>
          </div>

          <Toggle.Button />

          <div>
            <Toggle.Off> The button is off </Toggle.Off>
          </div>
        </Toggle>
      </div>
    );
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App;
