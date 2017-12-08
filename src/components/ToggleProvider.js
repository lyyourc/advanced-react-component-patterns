import React, { Component } from 'react'
import { Broadcast } from 'react-broadcast'
import PropTypes from 'prop-types'
import Toggle from './Toggle'

export default class ToggleProvider extends Component {
  static channel = '__toggle_channel__'

  render() {
    const { children, ...rest } = this.props
    console.dir(children)

    return (
      <Toggle
        {...rest}
        render={toggle => (
          <Broadcast channel={ToggleProvider.channel} value={toggle}>
            {children}
          </Broadcast>
        )}
      />
    )
  }
}
