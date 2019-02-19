import React from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import './CommentSection.scss';

class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            timestamp: props.timestamp,
            comment: ''
        }
    }

    addNewComment = (e, i) => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments, { username: 'lambdaschool', text: this.state.comment }],
            comment: ''
        });
    }

    handleChange = e => {
        this.setState({
            comment: e.target.value
        });
    }

    render() {
        return (
            <section>
                <ul>
                    {
                        this.state.comments.map((comment, i) => <Comment username={comment.username} text={comment.text} key={i} />)
                    }
                </ul>
                <time className="time">{this.state.timestamp}</time>
                <form onSubmit={this.addNewComment}>
                    <input type="text" placeholder="Add a comment..." onChange={this.handleChange} value={this.state.comment} />
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