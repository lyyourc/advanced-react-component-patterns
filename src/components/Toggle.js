import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types'

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
      togglerProps: {
        onClick: this.toggle,
        'aria-expanded': this.state.on,
      },
    })
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
