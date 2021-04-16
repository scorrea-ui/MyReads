/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ShelfSelector from './ShelfSelector';

const Book = ({ book, updateBookShelf }) => {
	const { imageLinks, title, authors, shelf } = book;
	return (
		<li>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${
								imageLinks
									? imageLinks.thumbnail || imageLinks.smallThumbnail
									: ''
							})`,
						}}
					></div>

					<ShelfSelector
						book={book}
						shelf={shelf}
						updateBookShelf={(book, shelf) => updateBookShelf(book, shelf)}
					/>
				</div>
				<div className='book-title'>{title}</div>
				<ul className='book-authors'>
					{authors &&
						authors.map((author) => {
							return <li key={author}>{author}</li>;
						})}
				</ul>
			</div>
		</li>
	);
};

Book.propTypes = { book: PropTypes.object.isRequired };

export default Book;
