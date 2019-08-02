import React, { Component } from 'react'
import './style.css';

export default class Index extends Component {
    render() {
        const {text} = this.props;
        return (
            <div>
                {text}
            </div>
        )
    }
}
