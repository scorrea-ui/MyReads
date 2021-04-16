import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';
import PropTypes from 'prop-types';

class Home extends Component {
	render() {
		const { currentlyReading, wantToRead, read, updateBookShelf } = this.props;
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<Shelf
							title='Currently Reading'
							books={currentlyReading}
							updateBookShelf={updateBookShelf}
						/>
						<Shelf
							title='Want to Read'
							books={wantToRead}
							updateBookShelf={updateBookShelf}
						/>
						<Shelf
							title='Read'
							books={read}
							updateBookShelf={updateBookShelf}
						/>
					</div>
				</div>
				<div className='open-search'>
					<Link to='/search'>Add a book</Link>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	currentlyReading: PropTypes.array.isRequired,
	wantToRead: PropTypes.array.isRequired,
	read: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};

export default Home;
