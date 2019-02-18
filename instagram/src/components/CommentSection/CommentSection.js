import React from 'react';
import './CommentSection.scss';

const CommentSection = (props) => {
    return (
        <section>
            <ul>
                {
                    props.comments.map(comment => (
                        <li><span>{comment.username}</span> {comment.text}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default CommentSection;