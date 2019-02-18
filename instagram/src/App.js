import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';
import dummyData from './data/dummy-data.js';


class App extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        {
          dummyData.map(article => <PostContainer article={article} />)
        }
      </main>
    );
  }
}

export default App;
