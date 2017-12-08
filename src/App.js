import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle, { withToggle } from './components/Toggle'

const MyToggleButton = withToggle(({ on, toggle }) => (
  <div>
    My custom toggle: 
    <button onClick={toggle}>
      { on ? 'open' : 'close' }
    </button>
  </div>
))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle onToggle={this.handleToggle} >
          <div>
            <Toggle.On> The button is on </Toggle.On>
          </div>
          <div>
            <Toggle.Off> The button is off </Toggle.Off>
          </div>

          <Toggle.Button />
          <hr />
          <MyToggleButton />

        </Toggle>
      </div>
    );
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App;
