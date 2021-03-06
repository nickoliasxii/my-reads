import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

export default class SavedBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div>
          <h1 className="main-header">My Library</h1>
        </div>
        <BookShelf
          title="Currently Reading"
          books={books.filter((book) => (book.shelf === "currentlyReading"))}
          onChangeBookShelf={this.props.onChange} />
        <BookShelf
          title="Want to Read"
          books={books.filter((book) => (book.shelf === "wantToRead"))}
          onChangeBookShelf={this.props.onChange} />
        <BookShelf
          title="Read"
          books={books.filter((book) => (book.shelf === "read"))}
          onChangeBookShelf={this.props.onChange} />
      </div>
    )
  }
}