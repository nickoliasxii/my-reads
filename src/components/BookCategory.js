import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BookCategory extends Component {
  static propTypes = {
    onShelfChange: PropTypes.func.isRequired
  }

  //Method that grabs event changes and updates the shelf
  changeShelf = (e) => {
    this.props.onShelfChange(e.target.value)
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeShelf} value={this.props.book.shelf}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    )
  }
}
