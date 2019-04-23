import React, {Component} from 'react';

class Counter extends Component {
    state = {
        counter: 0
    }
    incrementCounter = () => {
        this.setState(prevState => ({counter: prevState.counter + 1}))
    }
    decrementCounter = () => {
        this.setState(prevState => ({counter: prevState.counter - 1 }))
    }
    resetCounter = () => {
        this.setState({counter: 0})
    }
    render() {
        return(
            <div className='counter-box'>
                <span>Stan: {this.state.counter}</span>
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>
                <button onClick={this.resetCounter}>RESET</button>
            </div>
        )
    }
}

export default Counter