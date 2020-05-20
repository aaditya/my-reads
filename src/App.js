import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import ListBooks from './components/ListBooks';
import Search from './components/Search';

import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateBooks = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    this.fetchBooks();
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => <ListBooks books={this.state.books} onChange={this.updateBooks}></ListBooks>}></Route>
        <Route path='/search' render={() => <Search onChange={this.updateBooks}></Search>}></Route>
      </div>
    );
  }
}

export default App;
