import React from 'react';
import SearchBar from './SearchBar';
import dataApi from '../services/getDataFromApi';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await dataApi.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({videos: response.data.items});
  };
  render() {
    console.log(this.state.videos);
    
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
