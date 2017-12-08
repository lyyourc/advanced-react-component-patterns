import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types'
import Switch from './Switch'

const TOGGLE_CONTEXT = '__toggle__'

const ToggleOn = withToggle(({ children, toggleContext: { on } } = {}) => {
  return on ? children : null
})

const ToggleOff = withToggle(({ children, toggleContext: { on } } = {}) => {
  return on ? null : children
})

const ToggleButton = withToggle(
  ({ toggleContext: { on, toggle }, ...props }) => {
    return <Switch on={on} onClick={toggle} {...props} />
  }
)

export function withToggle(Component) {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return <Component toggleContext={toggleContext} {...props} />
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }

  return Wrapper
}

export default class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  static defaultProps = {
    onToggle: () => {},
  }

  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }

  state = {
    on: false,
  }

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle,
      },
    }
  }

  render() {
    return <div>{this.props.children}</div>
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
