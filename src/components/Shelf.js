import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Book from './Book';

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    updateBook = (book, shelf) => {
        this.props.onChangeShelf(book, shelf)
    }

    render() {
        const { title, books } = this.props;
        return (
            <div>
                <hr className="my-4" />
                <h3 className="lead">{title}</h3>
                <hr className="my-4" />
                <div className="row row-cols-1 row-cols-md-5">
                    {books.map((book, index) => <Book key={index} details={book} onUpdate={(shelf) => {
                        this.updateBook(book, shelf)
                    }}></Book>)}
                </div>
                &nbsp;
            </div>
        )
    }
}

export default Shelf;