import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TYSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCoLlgHIRtHQpkyBv3bKy7ooARNNUWGII0';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

videoSearch(term){
  TYSearch({key: API_KEY, term: term}, (videos) =>{
    this.setState({
       videos: videos,
       selectedVideo: videos[0]
     });
  });
}

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos}/>
      </div>
    );
  }
}

//add into the DOM - pleaes take this coponent and shove into the DOM
//put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
