import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => <li><h6>{props.username}</h6> {props.text}</li>

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment;