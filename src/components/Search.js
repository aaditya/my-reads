import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Book from './Book';

import * as BooksAPI from '../utils/BooksAPI'

class Search extends Component {
    state = {
        books: [],
        query: ''
    }

    static propTypes = {
        onChange: PropTypes.func.isRequired
    }

    searchBooks = async (value) => {
        let books = [];
        if (value.length > 0) {
            books = await BooksAPI.search(value, 25);
        }
        this.setState(() => ({
            books
        }));
    }

    setQuery = (e) => {
        let query = e.target.value;
        this.setState(() => ({
            query
        }));
        this.searchBooks(query);
    }

    updateBook = (book, shelf) => {
        this.props.onChange(book, shelf);
    }

    render() {
        const { books, query } = this.state;
        return (
            <div className="jumbotron">
                <div className="col-auto">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><Link to="/"><i className="fa fa-home"></i></Link></div>
                            <div className="input-group-text"><i className="fa fa-search"></i></div>
                        </div>
                        <input type="text" className="form-control" placeholder="Search Books" onChange={this.setQuery} />
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row row-cols-1 row-cols-md-5">
                    {books.length > 0
                        ? books.map((book, index) => <Book key={index} details={book} onUpdate={(shelf) => {
                            this.updateBook(book, shelf)
                        }}></Book>)
                        : query.length > 0
                            ? "No Books Found."
                            : "Start searching by typing in the search box above"}
                </div>
            </div>
        )
    }
}

export default Search;