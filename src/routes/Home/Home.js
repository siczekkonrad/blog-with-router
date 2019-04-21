import React, {Component} from 'react'
import Counter from '../../components/Counter/Counter.component'
import PostsList from '../../components/PostsList/PostsList.component';

class Home extends Component {
    state = {
        posts: [],
        loading: true
    }

    componentDidMount = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json =>
                this.setState({
                    posts: [...json],
                    loading: false
                })
            )
    }
    render() {
        return (
            <div className='App'>
                {!this.state.loading 
                    ?
                    <PostsList posts={this.state.posts} />
                    :
                    <h1>Ładuję posty...</h1>
                }
                <Counter />
            </div>
        )
    }
    
}

export default Home