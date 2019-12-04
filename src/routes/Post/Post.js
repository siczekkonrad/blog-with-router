import React, { Component } from 'react';
import CommentsForm from '../../components/CommentsForm/CommentsForm.component';
import CommentsList from '../../components/CommentsList/CommentsList.component';
import TextSection from '../../components/Text-Section/Text-Section.component';
import { StyledArticle, StyledArticleCommentsForm, StyledCommentsContainer } from './Post.style';

class Post extends Component {
  state = {
    post: [],
    loaded: false,
    comments: !localStorage.getItem(`comments${this.props.match.params.id}`) ? [] : JSON.parse(localStorage.getItem(`comments${this.props.match.params.id}`))
  }

  componentDidMount = () => {
    const fetchPosts = `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`;

    fetch(fetchPosts)
      .then(response => response.json())
      .then(json => (
        this.setState({
          post: json,
          comments: !this.state.comments ? JSON.parse(localStorage.getItem(`comments${this.props.match.params.id}`)) : this.state.comments,
          loaded: true,
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
    const comments = [...this.state.comments];
    comments.push(newComment);

    localStorage.setItem(`comments${this.props.match.params.id}`, JSON.stringify(comments));
    const localComments = JSON.parse(localStorage.getItem(`comments${this.props.match.params.id}`));

    this.setState({
      comments: localComments
    })
    event.target[0].value = '';
    event.target[1].value = '';
  }

  render() {
    return (
      <StyledArticle>
        {this.state.loading ? (
          <h1>Ładuję..</h1>
        ) : (
            <div>
              <div className="article">
                <h1>{this.state.post.title}</h1>
                <TextSection>
                  {this.state.post.body}
                </TextSection>
              </div>
              <StyledArticleCommentsForm>
                <CommentsForm
                  handleSubmit={this.handleSubmit.bind(this)}
                />
              </StyledArticleCommentsForm>
              {this.state.comments.length ? (
                <StyledCommentsContainer>
                  <CommentsList comments={this.state.comments} />
                </StyledCommentsContainer>
              ) : null}
            </div>
          )}
      </StyledArticle>
    );
  }
}
export default Post;