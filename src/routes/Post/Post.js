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
            <div>
            {!this.state.post ?
                <h1>Ładuję..</h1>
                :
                <div className='article'>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                </div>
            }
            </div>
        )
    }
}
export default Post