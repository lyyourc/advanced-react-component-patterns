import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import Toggle, { withToggle } from './components/Toggle'

class MyToggle extends Component {
  static ToggleMessage = withToggle(
    ({ toggleContext: { on } }) =>
      on ? 'Warning: The button is toggled on' : null
  )

  render() {
    const { toggleContext: { on, toggle } } = this.props
    return <button onClick={toggle}>{on ? 'on' : 'off'}</button>
  }
}

const MyToggleWrapper = withToggle(MyToggle)

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
          <hr />
          <MyToggleWrapper.ToggleMessage />
        </Toggle>
      </div>
    )
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App
