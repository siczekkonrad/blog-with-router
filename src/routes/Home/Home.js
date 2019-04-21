import React, {Component} from 'react'
import Counter from '../../components/Counter/Counter.component'
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json =>
                this.setState({
                    posts: [...json],
                })
            )
    }
    render() {
        return (
            <div className='App'>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
                <Counter />
            </div>
        )
    }
    
}

export default Home