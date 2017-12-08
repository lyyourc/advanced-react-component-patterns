import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import Switch from './components/Switch'
import Toggle from './components/Toggle'

class MyToggle extends Component {
  render() {
    const { on, toggle } = this.props
    return <button onClick={toggle}>{on ? 'open' : 'close'}</button>
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle
          onToggle={this.handleToggle}
          render={({ on, toggle }) => (
            <div>
              {on ? 'The button is on' : 'The button is off'}
              <Switch on={on} onClick={toggle} />
              <hr />
              <MyToggle on={on} toggle={toggle} />
            </div>
          )}>
        </Toggle>
      </div>
    )
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App
