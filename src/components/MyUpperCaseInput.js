import React, { Component } from 'react'

export default class MyUpperCaseInput extends Component {
  state = {
    upperValue: '',
    lowerValue: '',
  }

  render() {
    const { upperValue, lowerValue } = this.state

    return (
      <div>
        <label>
          Upper:
          <input value={upperValue} onChange={this.handleChange} />
        </label>

        <hr />

        <label>
          Lower:
          <input value={lowerValue} onChange={this.handleChange} />
        </label>
      </div>
    )
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      upperValue: value.toUpperCase(),
      lowerValue: value.toLowerCase(),
    })
  }
}
