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
        console.log(props)
    }

    addLike = () => {
        let likes = this.state.like ? this.state.likes - 1 : this.state.likes + 1;
        this.setState({
            like: !this.state.like,
            likes: likes
        });
    }

    render(props) {
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