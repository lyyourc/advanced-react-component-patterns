import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import Toggle, { withToggle } from './components/Toggle'

const MyToggle = ({ toggleContext: { on, toggle } }) => {
  return (
    <button onClick={toggle}>
      { on ? 'on' : 'off' }
    </button>
  )
}

const MyToggleWrapper = withToggle(MyToggle)

function test() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const toggle = () => (toggle.called  = true)

  ReactDOM.render(
    <MyToggleWrapper.WrappedComponent toggleContext={{ on: true, toggle }} />,
    div
  )

  if (!div.innerHTML.includes('on')) {
    throw new Error(`Contents are wrong: ${div.innerHTML}`)
  }
}

test()

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
