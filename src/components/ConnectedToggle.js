import React, { Component } from 'react'
import ToggleProvider from './ToggleProvider'
import PropTypes from 'prop-types'

export default function ConnectedToggle(props, context) {
  return props.render(context[ToggleProvider.contextName])
}

ConnectedToggle.contextTypes = {
  [ToggleProvider.contextName]: PropTypes.object.isRequired,
}
