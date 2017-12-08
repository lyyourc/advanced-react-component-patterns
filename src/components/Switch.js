import React, { Component } from 'react';

export default class Switch extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.on ? 'ON' : 'OFF'}</button>
        );
    }
}
