import React from 'react';
import './App.css';
import './components/searchBar';
import SearchBar from './components/searchBar';
import Filter from './components/filter';
import Books from './components/books';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        search: "",
        printType: "all",
        filter: "",
        books: []
    }
  }
  setPrint(type) {
    this.setState({
        printType: type
    })
  }
  setFilter(type) {
    this.setState({
        filter: type
    })
  }
  setSearch(search) {
    this.setState({
      search
    })
  }
  paramify(searchObj) {
    return Object.keys(searchObj).map(key => (searchObj[key]) ? `${key}=${searchObj[key]}` : "").filter(item => item).join('&');
  }
  bookApiUrl() {
    const endpoint = "https://www.googleapis.com/books/v1/volumes?";
    const params = (({printType, filter}) => ({printType, filter}))(this.state);
    params.key = "AIzaSyAaUDuI-ADDap_RNfgazKv8Edyqv7Jzu_4";
    params.q = this.state.search;
    const searchParams = this.paramify(params);
    const url = endpoint + searchParams;
    console.log(url)
    return url;
  }
  cleanBookObject(data) {
    const object = data.items;
    return object.map(book => {
      const title = book.volumeInfo.title;
      const picture = book.volumeInfo.imageLinks.thumbnail|| null;
      const author = book.volumeInfo.authors || [];
      const description = book.volumeInfo.description;
      let price;
      switch (book.saleInfo.saleability) {
        default:
          price = "N/A";
          break;
        case "NOT_FOR_SALE":
          price = "Not for sale";
          break;
        case "FREE":
          price = 0;
          break;
        case "FOR_SALE":
          price = book.saleInfo.listPrice.amount;
      }
      return { title, picture, author, price, description }
    })
  }
  searchBooks(e) {
    e.preventDefault();
    const url = this.bookApiUrl()
    fetch(url)
      .then(resp => {
          if (!resp.ok) {
              throw new Error("whoops")
          }
          return resp.json()
      })
      .then(data => this.cleanBookObject(data))
      .then(books => this.setState({books}))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <>
        <header><h1>Google Book Search</h1></header>
        <main className="App">
          <SearchBar setSearch={search => this.setSearch(search)} searchBooks={e => this.searchBooks(e)}/>
          <Filter setPrint={type => this.setPrint(type)} setFilter={type => this.setFilter(type)}/>
          <Books books={this.state.books}/>
        </main>
      </>
    );
  }
}

export default App;
