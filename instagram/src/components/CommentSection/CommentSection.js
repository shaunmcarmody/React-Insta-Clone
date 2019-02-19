import React from 'react';
import './CommentSection.scss';

const CommentSection = (props) => {
    return (
        <section>
            <ul>
                {
                    props.comments.map(comment => (
                        <li><h6>{comment.username}</h6> {comment.text}</li>
                    ))
                }
            </ul>
            <input type="text" placeholder="Add a comment..." />
        </section>
    )
}

export default CommentSection;