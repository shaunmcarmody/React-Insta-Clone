import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';
import dummyData from './data/dummy-data.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: dummyData
    }
  }
  render() {
    return (
      <>
        <SearchBar />
        <main>
          {
            this.state.articles.map(article => <PostContainer article={article} />)
          }
        </main>
      </>
    );
  }
}

App.propTypes = {
  article: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.timestamp,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })),
  }))
};

export default App;
