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
            this.state.articles.map((article, i) => <PostContainer article={article} key={i}/>)
          }
        </main>
      </>
    );
  }
}

export default App;
