// Create a new component . this component wil produce HTML
// take component's geenerated html and put it in the DOM.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBO6ItKn7UQmWPVsQApsy0gmRw9qF0dfVU';


class App extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'doctor who'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  };
}

ReactDOM.render(<App />, document.querySelector('.container'));
