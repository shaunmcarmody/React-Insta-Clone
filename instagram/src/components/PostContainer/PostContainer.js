import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import './PostContainer.scss';

const PostContainer = (props) => {
    return (
        <article>
            {
                <>
                    <header>
                        <img src={props.article.thumbnailUrl} />
                        <h1>{props.article.username}</h1>
                    </header>
                    <img src={props.article.imageUrl} />
                    <div>
                        <icon>

                        </icon>
                        <icon>

                        </icon>
                    </div>
                    <h3>{props.article.likes}</h3>
                    <CommentSection comments={props.article.comments} />
                    <h6>{props.article.timestamp}</h6>
                </>
            }
        </article>
    )
}

export default PostContainer;