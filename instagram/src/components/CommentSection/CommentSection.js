import React from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentsUl = styled.ul`
    list-style: none outside none;
    padding-left: 10px;
`;

const Time = styled.time`
    display: block;
    margin: 8px 0 8px 10px;
`;

const CommentsInput = styled.input`
    border: none;
    border-top: solid 1px #dbdbdb;
    height: 28px;
    margin: 0 5px;
    padding: 22px 7px;
    width: 98%;
`;


class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            timestamp: props.timestamp,
            comment: ''
        }
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState(state => {
            return {
                comments: [...state.comments, { username: localStorage.getItem('username'), text: state.comment }],
                comment: '',
            }
        })
    }

    handleChange = e => {
        this.setState({
            comment: e.target.value
        });
    }

    render() {
        return (
            <section>
                <CommentsUl>
                    {
                        this.state.comments.map((comment, i) => <Comment username={comment.username} text={comment.text} key={i} />)
                    }
                </CommentsUl>
                <Time className="time">{this.state.timestamp}</Time>
                <form onSubmit={this.addNewComment}>
                    <CommentsInput
                        className="comments-input"
                        type="text"
                        placeholder="Add a comment..."
                        onChange={this.handleChange}
                        value={this.state.comment}
                    />
                </form>
            </section>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    timestamp: PropTypes.string.isRequired
}

export default CommentSection;