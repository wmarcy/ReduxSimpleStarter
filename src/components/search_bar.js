import React, { Component } from 'react';

//Class based component
class SearchBar extends Component {

  constructor(props){
    super(props);
    //initialize the state
    //contains properties we want to record on the state
    this.state = { term: ''};
  }

    //Default Method
    render(){
        return (
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

//Export component
export default SearchBar;
