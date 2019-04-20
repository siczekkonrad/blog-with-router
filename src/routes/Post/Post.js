import React, {Component} from 'react'


class Post extends Component {
    state = {
        post : []
    }

    componentDidMount = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => (
                    this.setState({
                        post: json,
                    })
                )
            )
    }

    render() {
        return (
            <div className='article'>
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}
export default Post