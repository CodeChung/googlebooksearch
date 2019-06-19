import React from 'react';
import Book from './book';
import './books.css';

class Books extends React.Component {
  render() {
    const books = this.props.books
      .map((book, i) => {
        return <Book {...book} key={i}/>
      })
    return (
      <div className="book-list">
        {books}
      </div>
    )
  }
}

export default Books