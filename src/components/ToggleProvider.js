import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Toggle from './Toggle'

export default class ToggleProvider extends Component {
  static contextName = '__toggle__'

  static Renderer = class extends Component {
    static childContextTypes = {
      [ToggleProvider.contextName]: PropTypes.object.isRequired,
    }

    getChildContext() {
      return {
        [ToggleProvider.contextName]: this.props.toggle
      }
    }

    render() {
      return this.props.children
    }
  }

  render() {
    const { children, ...rest } = this.props

    return (
      <Toggle {...rest} render={toggle =>
        <ToggleProvider.Renderer toggle={toggle} children={children} />
      }>
      </Toggle>
    )
  }
}
