import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import Switch from './components/Switch'
import Toggle from './components/Toggle'

class MyToggle extends Component {
  render() {
    const { on, toggle } = this.props
    return (
      <button aria-expanded={on} onClick={toggle}>
        {on ? 'open' : 'close'}
      </button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle
          defaultOn={true}
          onToggle={this.handleToggle}
          onReset={on => console.log('reset', on)}
          render={({ on, reset, getTogglerProps }) => (
            <div>
              <Switch on={on} {...getTogglerProps()} />
              <button
                onClick={() => reset()}
              >
                Reset
              </button>
            </div>
          )}
        />
      </div>
    )
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App
