import React, { Component } from 'react'
import Switch from './Switch'

export default class Toggle extends Component {
  static defaultProps = {
    onToggle: () => {}
  }
  state = {
    on: false,
  }

  render() {
    const { on } = this.state

    return <Switch on={on} onClick={this.toggle} />
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
