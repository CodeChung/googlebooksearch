import React from 'react';
import './books.css';

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <h2>{this.props.title}</h2>
        <div className="book-block">
          <img src={this.props.picture} alt="book img"></img>
          <div className="book-info">
            <h3>Author(s) {this.props.author}</h3>
            <h3>Price: ${this.props.price}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Book;