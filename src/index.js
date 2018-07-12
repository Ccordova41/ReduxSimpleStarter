// Create a new component . this component wil produce HTML
// take component's geenerated html and put it in the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCcBCDdozCd3Ts2IZPdMk8FC_H6Blr8SLw';

YTSearch({key: API_KEY, term: 'sufboards'}, function(date) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
