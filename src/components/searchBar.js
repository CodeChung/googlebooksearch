import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    // title, picture, author, price (saleInfo->listPrice), description
    render() {
        return (
            <form onSubmit={e => this.props.searchBooks(e)}>
                <label htmlFor="book">Search:</label>
                <input name="book" id="book" type="text" onChange={e => this.props.setSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;