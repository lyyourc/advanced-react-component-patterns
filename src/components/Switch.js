import React, { Component } from 'react'

export default class Switch extends Component {
  render() {
    const { on } = this.props

    return (
      <button aria-expanded={on} onClick={this.props.onClick}>
        {on ? 'ON' : 'OFF'}
      </button>
    )
  }
}
