import React, { Component } from 'react'
import './App.css'
import ConnectedToggle from './components/ConnectedToggle'
import ToggleProvider from './components/ToggleProvider'
import Switch from './components/Switch'

function Header() {
  return <ConnectedToggle render={
    toggle => <Switch {...toggle.getTogglerProps({ on: toggle.on })} />
  } />
}

function Post() {
  return <ConnectedToggle render={
    toggle => (toggle.on ? '😀' : 'text')
  } />
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleProvider>
          <Header />
          <Post />
        </ToggleProvider>
      </div>
    )
  }
}

export default App
