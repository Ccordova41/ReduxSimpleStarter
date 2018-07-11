// Create a new component . this component wil produce HTML
// take component's geenerated html and put it in the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// const API_KEY = 'AIzaSyCcBCDdozCd3Ts2IZPdMk8FC_H6Blr8SLw';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
