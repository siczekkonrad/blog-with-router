import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class NotFound extends Component {
    state ={
        navigate: false
    }
    componentDidMount = () => {
        setTimeout(() => {
           this.setState(prevState => ({
               navigate: true
           }))
        }, 10000);
    }
    render() {
        if(this.state.navigate) {
            return (<Redirect to='/' />)
        }
        return (
            <h1>Page not found!</h1>
        )
    }
}

export default NotFound