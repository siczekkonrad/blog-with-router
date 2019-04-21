import React, {Component} from 'react'
import CommentsForm from '../../components/CommentsForm/CommentsForm.component';
import CommentsList from '../../components/CommentsList/CommentsList.component';


class Post extends Component {
    state = {
        post : [],
        loaded: false,
        comments: !localStorage.getItem(`comments${this.props.match.params.id}`) ? [] : JSON.parse(localStorage.getItem(`comments${this.props.match.params.id}`))
    }

    componentDidMount = () => {
    
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => (
                    this.setState({
                        post: json,
                        loaded: true,
                        comments: !this.state.comments ? JSON.parse(localStorage.getItem(`comments${this.props.match.params.id}`)) : this.state.comments
                    })
                )
            )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            name: event.target[0].value,
            comment: event.target[1].value
        }
        const comments = [...this.state.comments]
        comments.push(newComment)

        localStorage.setItem(`comments${this.props.match.params.id}`, JSON.stringify(comments))
        const localComments = JSON.parse(localStorage.getItem(`comments${this.props.match.params.id}`))
        
        this.setState({
            comments: localComments
        })
    }

    render() {
        return (
            <div>
            {this.state.loading ?
                <h1>Ładuję..</h1>
                :
                <div>
                <div className='article'>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                </div>
                <CommentsForm handleSubmit={this.handleSubmit.bind(this)} />
                <CommentsList comments={this.state.comments}/>
                </div>
            }
            </div>
        )
    }
}
export default Post