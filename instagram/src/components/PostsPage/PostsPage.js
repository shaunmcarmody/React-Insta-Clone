import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import './PostsPage.scss';
import dummyData from '../../data/dummy-data.js';


class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      search: ''
    }
  }

  componentDidMount() {
    this.setState({ articles: dummyData });
  }

  handleChange = e => {
    this.setState({
      articles: dummyData.filter(data => data.username.startsWith(e.target.value)),
      search: e.target.value
    })
  }

  render() {
    return (
      <>
        <SearchBar handleChange={this.handleChange} search={this.state.search} />
        <main>
          {
            this.state.articles.map((article, i) => <PostContainer article={article} state={'article'} key={i}/>)
          }
        </main>
      </>
    );
  }
}

export default PostsPage;
