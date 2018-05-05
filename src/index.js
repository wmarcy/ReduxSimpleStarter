import React from 'react';
import ReactDOM from 'react-dom'

// Create new Componentthis component should produce some html
//some html
const App = () => {
  return <div>Hi! Wayne Updates during first project file. And another change. </div>;
}

//add into the DOM - pleaes take this coponent and shove into the DOM
//put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
