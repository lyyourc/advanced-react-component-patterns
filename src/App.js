import React, { Component } from 'react'
import './App.css'
import ConnectedToggle from './components/ConnectedToggle'
import ToggleProvider from './components/ToggleProvider'
import withToggle from './components/withToggle'
import Switch from './components/Switch'

function Header() {
  return <ConnectedToggle render={
    toggle => <Switch {...toggle.getTogglerProps({ on: toggle.on })} />
  } />
}

const Post = withToggle(
  ({ toggle }) => <div>{toggle.on ? '😀' : 'text'}</div>
)

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
