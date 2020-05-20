import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Book extends Component {
    static propTypes = {
        details: PropTypes.object.isRequired,
        onUpdate: PropTypes.func.isRequired
    }

    changeShelf = (e) => {
        this.props.onUpdate(e.target.value)
    }
    render() {
        return (
            <div className="card">
                <img src={this.props.details.imageLinks && this.props.details.imageLinks.thumbnail} style={{ width: '128px', height: '193px' }} className="card-img-top m-auto" alt="No Thumbnail Available" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.details.title}</h5>
                    <p className="card-text">{this.props.details.description ? this.props.details.description.substring(0, 50) + '...' : "No Description Available"}</p>
                </div>
                <select className="form-control" style={{ border: '0' }} onChange={this.changeShelf} value={this.props.details.shelf || "none"}>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                <div className="card-footer">
                    <small className="text-muted">{this.props.details.authors ? this.props.details.authors.join(", ") : "Miscellaneous"}</small>
                </div>
            </div>
        )
    }
}

export default Book;