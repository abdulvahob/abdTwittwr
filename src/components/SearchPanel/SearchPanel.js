import React, { Component } from "react";
import './SearchPanel.css'
export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onvalueInput = this.onvalueInput.bind(this);
  }

  onvalueInput(e) {
    const isValue = e.target.value;
    this.setState({ term: isValue });
    this.props.onvalueInput(isValue);
  }

  
  render() {
    return (
      <input
        type="search"
        placeholder="Search by posts"
        className="form-control  search-input "
        onChange={this.onvalueInput}
        value={this.state.term}
      />
    );
  }
}
