import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

export default class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLogin : true,
        }
    }
    
    render() {

        const { isLogin } = this.state;
        
        return(
            <div>
                { isLogin ? <LoginPage /> : <HomePage /> }
            </div>
        )
    }
}
