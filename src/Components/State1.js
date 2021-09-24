import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class State1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    
    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
    

    render() {

        const { count } = this.state;
        return (
            <div>
                <h2>Count:{count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

