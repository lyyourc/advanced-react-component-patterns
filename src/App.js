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
          render={({ on, toggle, getTogglerProps }) => (
            <div>
              {on ? 'The button is on' : 'The button is off'}
              <Switch on={on} {...getTogglerProps()} />
              <hr />
              <button
                {...getTogglerProps({
                  onClick: () => {
                    console.log('hi')
                  },
                  id: 'hi',
                })}
              >
                { on ? 'open' : 'close' }
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
