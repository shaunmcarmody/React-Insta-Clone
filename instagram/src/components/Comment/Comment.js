import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../styles/reusables';

const CommentLi = styled.li`
    font-size: 1.2rem;
    color: #262626;
    padding-top: 5px;
`;

const Comment = props => (
    <CommentLi>
        <Username comment={true}>{props.username} </Username> 
        {props.text}
    </CommentLi>
)

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment;