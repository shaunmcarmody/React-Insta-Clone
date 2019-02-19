import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostContainer.scss';

const PostContainer = (props) => {
    return (
        <article>
            <header>
                <img src={props.article.thumbnailUrl} alt={props.article.username} />
                <h1>{props.article.username}</h1>
            </header>
            <img src={props.article.imageUrl} alt={props.article.username} />
            <div>
                <icon>

                </icon>
                <icon>

                </icon>
            </div>
            <h3>{props.article.likes} likes</h3>
            <CommentSection comments={props.article.comments} />
            <time>{props.article.timestamp}</time>
        </article>   
    )
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