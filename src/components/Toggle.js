import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types'

const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

export default class Toggle extends Component {
  static defaultProps = {
    onToggle: () => {},
  }

  state = {
    on: false,
  }

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps,
    })
  }

  getTogglerProps = ({ onClick, ...props } = {}) => {
    return {
      'aria-expanded': this.state.on,
      onClick: compose(onClick, this.toggle),
      ...props,
    }
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
