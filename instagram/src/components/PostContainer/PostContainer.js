import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
// import moment from 'moment';
import './PostContainer.scss';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.article.username,
            thumbnailUrl: props.article.thumbnailUrl,
            imageUrl: props.article.imageUrl,
            like: false,
            likes: props.article.likes,
            timestamp: props.article.timestamp,
            comments: props.article.comments
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.article.username !== this.props.username) {
            this.setState({
                username: nextProps.article.username,
                thumbnailUrl: nextProps.article.thumbnailUrl,
                imageUrl: nextProps.article.imageUrl,
                like: false,
                likes: nextProps.article.likes,
                timestamp: nextProps.article.timestamp,
                comments: nextProps.article.comments
            })
        }
    } 

    addLike = () => {
        this.setState((state) => {
          return {
            like: !state.like,
            likes: state.like ? state.likes - 1 : state.likes + 1,
          }
        })
    }

    render() {
        return (
            <article>
                <header>
                    <img src={this.state.thumbnailUrl} alt={this.state.username} />
                    <h1>{this.state.username}</h1>
                </header>
                <img src={this.state.imageUrl} alt={this.state.username} />
                <div className="icons">
                    <div className="heart" onClick={this.addLike}/>
                    <div className="comment" />
                </div>
                <h3>{this.state.likes} likes</h3>
                <CommentSection comments={this.state.comments} timestamp={this.state.timestamp} />
            </article>   
        )
    }
}

PostContainer.propTypes = {
  article: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
  }).isRequired,
};

export default PostContainer;