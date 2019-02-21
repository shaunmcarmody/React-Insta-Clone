import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import comment from '../../assets/heart.svg';
import heart from '../../assets/comment.svg';
import styled, { css } from 'styled-components';

const PostArticle = styled.article`
    background-color: #ffffff;
    border: 1px solid #e6e6e6;
    margin-bottom: 60px;
`;

const PostHeader = styled.header`
    display: flex;
    height: 60px;
    padding: 10px;
`;

const PostHeaderImg = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
`;

const PostTitle = styled.h1`
    color: #262626;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 40px;
    margin-left: 12px;
    vertical-align: center;
`;

const PostImg = styled.img`
    display: block;
    width: 100%;
`;

const PostIcons = styled.div`
    ${props => props.container &&
        css`
            padding: 5px 0 5px 10px;
            display: flex;
            height: 28px;
        `};

    ${props => props.icon &&
        css`
            background-size: 20px 20px;
            line-height: 24px;
            margin-right: 20px;
            width: 20px;
        `};
`;

const Heart = styled(PostIcons)`
    background: url(${heart}) center center no-repeat;
`;

const Comment = styled(PostIcons)`
    background: url(${comment}) center center no-repeat;
`;

const PostSubTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    padding-left: 10px;
    color: #262626;
`;

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
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.article.username !== this.props.username) {
            this.setState({
                username: nextProps.article.username,
                thumbnailUrl: nextProps.article.thumbnailUrl,
                imageUrl: nextProps.article.imageUrl,
                like: false,
                likes: nextProps.article.likes,
                timestamp: nextProps.article.timestamp,
                comments: nextProps.article.comments
            });
        }
    } 

    addLike = () => {
        this.setState(state => {
          return {
            like: !state.like,
            likes: state.like ? state.likes - 1 : state.likes + 1,
          }
        });
    }

    render() {
        return (
            <PostArticle>
                <PostHeader>
                    <PostHeaderImg src={this.state.thumbnailUrl} alt={this.state.username} />
                    <PostTitle>{this.state.username}</PostTitle>
                </PostHeader>
                <PostImg src={this.state.imageUrl} alt={this.state.username} />
                <PostIcons container={true} >
                    <Heart icon={true} />
                    <Comment icon={true} />
                </PostIcons>
                <PostSubTitle>{this.state.likes} likes</PostSubTitle>
                <CommentSection comments={this.state.comments} timestamp={this.state.timestamp} />
            </PostArticle>   
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