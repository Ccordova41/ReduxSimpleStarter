// Create a new component . this component wil produce HTML
// take component's geenerated html and put it in the DOM.
import _ from 'lodash'; 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoListItem from './components/video_list_item'

const API_KEY = 'AIzaSyCplVhkVF1UxR7Z86U9f0Nco9KBn-iJfyU';


class App extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('doctor who');
    }



  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  };
}

ReactDOM.render(<App />, document.querySelector('.container'));
