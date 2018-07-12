// Create a new component . this component wil produce HTML
// take component's geenerated html and put it in the DOM.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyCcBCDdozCd3Ts2IZPdMk8FC_H6Blr8SLw';


class App extends Component {
  constructor(props) {
    super(props);

    this.state =  { videos: [] };

    YTSearch({key: API_KEY, term: 'doctor who'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  };
}

ReactDOM.render(<App />, document.querySelector('.container'));
