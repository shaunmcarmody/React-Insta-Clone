import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';
import dummyData from './data/dummy-data.js';


class App extends React.Component {
  constructor() {
    // initialize data / bind function (if you're not using arrow functions) this runs one time only!
    // console.log('Constructor running');
    super();
    this.state = {
      articles: [],
      search: ''
    }
  }

  componentDidMount() {
    // after the initial render, CDM runs one time only
    // perform initial data fetches here - update state with the fetched data
    // console.log('CDM running');
    this.setState({ articles: dummyData });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // SCU is running, let's compare this.state and nextState
    console.log('SCU currentState:', this.state);
    console.log('SCU nextState', nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // CDU is running, let's compare this.state and prevState
    console.log('CDU currentState:', this.state);
    console.log('CDU prevState', prevState);
  }

  handleChange = e => {
    this.setState({
      articles: dummyData.filter(data => data.username.startsWith(e.target.value)),
      search: e.target.value
    })
  }

  render() {
    // render all the things! this function can run many times in a component's lifespan
    // console.log('rendering App.js');
    return (
      <>
        <SearchBar handleChange={this.handleChange} search={this.state.search} />
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
