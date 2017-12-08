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
  initState = { timeClicked: 0, on: true }
  state = this.initState

  render() {
    const { timeClicked, on } = this.state

    return (
      <div className="App">
        <Toggle
          on={on}
          onToggle={this.handleToggle}
          onReset={this.handleReset}
          render={({ on, reset, getTogglerProps }) => (
            <div>
              <Switch on={on} {...getTogglerProps()} />
              {timeClicked > 4
                ? 'Whoa, you have clicked too much'
                : `click count: ${timeClicked}`}
              <button onClick={() => reset()}>Reset</button>
            </div>
        )}
        />
      </div>
    )
  }

  handleToggle = () => {
    this.setState(({ timeClicked, on }) => ({
      timeClicked: timeClicked + 1,
      on: timeClicked >= 4 ? false : !on,
    }))
  }

  handleReset = () => {
    this.setState(this.initState)
  }
}

export default App
