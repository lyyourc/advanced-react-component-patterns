import React, { Component } from 'react'
import Switch from './Switch'

function ToggleOn({ on, children } = {}) {
  return on ? children : null
}
function ToggleOff({ on, children } = {}) {
  return on ? null : children
}
function ToggleButton({ on, toggle, ...props } = {}) {
  return <Switch on={on} onClick={toggle} {...props} />
}

export default class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  static defaultProps = {
    onToggle: () => {},
  }

  state = {
    on: false,
  }

  render() {
    const { on } = this.state
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on,
        toggle: this.toggle,
      })
    )

    return <div>{ children }</div>
  }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      }
    )
  }
}
