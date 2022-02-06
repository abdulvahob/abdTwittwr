import React, { Component } from 'react';
import "./PostAddForm.css";

export default class PostAddForm extends Component {

  constructor(props){
    super(props);
    this.state={
      body: '',
    }

    this.formValue = this.formValue.bind(this)
    this.onSubmit  = this.onSubmit.bind(this)
  }
  formValue(e){
    this.setState({body: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    this.props.onAdd(this.state.body);
    this.setState({body: ''})

  }
  render() {
    return (
      <form className="bottom-panel d-flex " onSubmit={this.onSubmit} >
        <input
          type="text"
          placeholder="Wath are you thinking about"
          className="form-control mr-1 new-post-label"
          onChange={this.formValue}
          value={this.state.body}
        />
          <button 
          type="button" 
          className="btn btn-outline-secondary"
          onClick={this.onSubmit}
          >
            AddPost
          </button>
      </form>
    );
  }
}




