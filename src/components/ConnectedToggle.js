import React, { Component } from 'react'
import { Subscriber } from "react-broadcast"
import ToggleProvider from './ToggleProvider'
import PropTypes from 'prop-types'

export default function ConnectedToggle(props) {
  return (
    <Subscriber channel={ToggleProvider.channel}>
      {toggle => props.render(toggle)}
    </Subscriber>
  )
}
