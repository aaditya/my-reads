import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Shelf from './Shelf';

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    }

    getBooksByFilter = (key) => {
        return this.props.books.filter((book) => (book.shelf === key));
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">My Reads <Link to="/search" style={{ float: "right" }}><i className="fa fa-search"></i></Link></h1>
                <Shelf books={this.getBooksByFilter("currentlyReading")} title="Currently Reading" onChangeShelf={this.props.onChange}></Shelf>
                <Shelf books={this.getBooksByFilter("read")} title="Already Read" onChangeShelf={this.props.onChange}></Shelf>
                <Shelf books={this.getBooksByFilter("wantToRead")} title="Want to Read" onChangeShelf={this.props.onChange}></Shelf>
            </div>
        )
    }
}

export default ListBooks;