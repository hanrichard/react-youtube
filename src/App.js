import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import youtube from './api/youtube';


class App extends Component {
  state = {
    videos: [],
    selectVideo: ''
  }

  onSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items    
    });
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onSubmit = {this.onSubmit} />
        <div className="">
          <VideoPlayer />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
