import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }
  

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
          <label>search your video</label>
          <input 
            type="text" 
            value={this.state.term} 
            className="textField"
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
