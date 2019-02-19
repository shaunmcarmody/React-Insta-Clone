import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';
import dummyData from './data/dummy-data.js';


class App extends React.Component {
  constructor() {
    // initialize data / bind function (if you're not using arrow functions) this runs one time only!
    console.log('Constructor running');
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    // after the initial render, CDM runs one time only
    // perform initial data fetches here - update state with the fetched data
    console.log('CDM running');
    this.setState({ articles: dummyData });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("SCU is running, let's compare this.state and nextState");
    // Logging this.state returns the current state
    console.log('SCU currentState', this.state);
    // Loging nextState returns the next state
    console.log('SCU nextState', nextState);
    // console.log('SCU nextProps', nextProps);
    if (this.state === nextState) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU is running, let's compare this.state and prevState");
    // Logging this.state returns the current state
    console.log('CDU currentState', this.state);
    // Loging prevState returns the pevious state
    console.log('CDU prevState', prevState);
    // console.log('CDU prevProps', prevProps);
  }

  render() {
    // render all the things! this function can run many times in a component's lifespan
    console.log('rendering App.js');
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
