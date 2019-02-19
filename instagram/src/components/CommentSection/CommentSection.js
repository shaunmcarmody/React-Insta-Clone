import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.scss';

const CommentSection = (props) => {
    return (
        <section>
            <ul>
                {
                    props.comments.map((comment, i) => (
                        <li key={i}><h6>{comment.username}</h6> {comment.text}</li>
                    ))
                }
            </ul>
            <time className="time">{props.timestamp}</time>
            <input type="text" placeholder="Add a comment..." />
        </section>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    timestamp: PropTypes.string
}

export default CommentSection;