import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Toggle, { withToggle } from './components/Toggle'

const MyToggleWrapper = withToggle(function MyToggleWrapper(
  { toggleContext: { on, toggle } }) {
    return (
      <div>
        My custom toggle:
        <button onClick={toggle}>{on ? 'open' : 'close'}</button>
      </div>
    )
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle onToggle={this.handleToggle}>
          <Toggle.On> The button is on </Toggle.On>
          <Toggle.Off> The button is off </Toggle.Off>
          <Toggle.Button />
          <hr />
          <MyToggleWrapper />
        </Toggle>
      </div>
    )
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App
