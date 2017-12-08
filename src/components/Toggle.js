import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types'

const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

export default class Toggle extends Component {
  static defaultProps = {
    defaultOn: false,
    onToggle: () => {},
    onReset: () => {},
  }

  initState = {
    on: this.props.defaultOn,
  }

  state = this.initState

  render() {
    return this.props.render({
      on: this.isOnControlled() ? this.props.on : this.state.on,
      toggle: this.toggle,
      reset: this.reset,
      getTogglerProps: this.getTogglerProps,
    })
  }

  isOnControlled = () => {
    return this.props.on !== undefined
  }

  reset = () => {
    if (this.isOnControlled()) {
      this.props.onReset(this.props.on)
    } else {
      this.setState(this.initState, () => {
        this.props.onReset(this.state.on)
      })
    }
  }

  getTogglerProps = ({ onClick, ...props } = {}) => {
    return {
      'aria-expanded': this.state.on,
      onClick: compose(onClick, this.toggle),
      ...props,
    }
  }

  toggle = () => {
    if (this.isOnControlled()) {
      this.props.onToggle(!this.props.on)
    } else {
      this.setState(
        ({ on }) => ({ on: !on }),
        () => {
          this.props.onToggle(this.state.on)
        }
      )
    }
  }
}
