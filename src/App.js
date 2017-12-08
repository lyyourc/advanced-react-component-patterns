import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Toggle, { withToggle } from './components/Toggle'

class myToggle extends Component {
  focus = () => this.button.focus()

  render() {
    const { on, toggle } = this.props

    return (
      <div>
        My custom toggle:
        <button ref={button => (this.button = button)} onClick={toggle}>
          {on ? 'open' : 'close'}
        </button>
      </div>
    )
  }
}

const MyToggleWrapper = withToggle(myToggle)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle onToggle={on => (on ? this.myToggle.focus() : null)}>
          <Toggle.On> The button is on </Toggle.On>
          <Toggle.Off> The button is off </Toggle.Off>
          <Toggle.Button />
          <hr />
          <MyToggleWrapper innerRef={myToggle => (this.myToggle = myToggle)} />
        </Toggle>
      </div>
    )
  }
  handleToggle = on => {
    console.log(on)
  }
}

export default App
