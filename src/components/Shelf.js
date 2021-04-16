import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({ title, books, updateBookShelf }) => {
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{title}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{books.map((book) => (
						<Book key={book.id} book={book} updateBookShelf={updateBookShelf} />
					))}
				</ol>
			</div>
		</div>
	);
};

Shelf.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};

export default Shelf;
