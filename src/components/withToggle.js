import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatic from 'hoist-non-react-statics'
import ConnectedToggle from './ConnectedToggle'

export default function withToggle(Component) {
  function Wrapper({ innerRef, ...props }) {
    return (
      <ConnectedToggle render={
        toggle => <Component ref={innerRef} toggle={toggle} {...props} />
      } />
    )
  }

  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`

  Wrapper.WrappedComponent = Component

  return hoistNonReactStatic(Wrapper, Component)
}
