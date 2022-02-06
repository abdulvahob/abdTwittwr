import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {
  render() {
    const { label, onDelete, onToggleLiked, onToggleImportant  , important , like} = this.props;

    let classNames = " app-list-item d-flex justify-content-between ";
    if (important) {
      classNames = classNames + " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span onClick={onToggleLiked} className="app-list-item-lable">
          {label}
        </span>
        <div className="d-flex justify-content-flex-end align-items-center">
          <button onClick={onToggleImportant} className="btn-star btn-sm">
            <i className="fa fa-star"></i>
          </button>
          <button onClick={onDelete} className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart btn-heart"></i>
        </div>
      </div>
    );
  }
}
