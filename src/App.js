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

class UpdateBlocker extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    return this.props.children
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleProvider>
          <div>
            <Header />
            <UpdateBlocker>
              <Post />
            </UpdateBlocker>
          </div>
        </ToggleProvider>
      </div>
    )
  }
}

export default App
