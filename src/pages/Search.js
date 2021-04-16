import React, { useState } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = ({ allBooks, updateBookShelf }) => {
	const [query, setQuery] = useState('');
	const [books, setBooks] = useState([]);

	const checkBookShelf = (books) => {
		books.map((book) => {
			book.shelf = !book.shelf ? 'none' : book.shelf;
			return book;
		});

		books.map((book) => {
			return allBooks.map((b) => {
				if (book.id === b.id) {
					book.shelf = b.shelf;
				}
				return book;
			});
		});
	};

	const updateQuery = async (e) => {
		setQuery(e.target.value);
		const books = await BooksAPI.search(query);

		if (books && books.length > 0) {
			checkBookShelf(books);
			setBooks(books);
		} else {
			setBooks([]);
		}
	};

	const updateBookShelves = async (book, shelf) => {
		await updateBookShelf(book, shelf);
	};

	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<Link className='close-search' to='/'>
					Close
				</Link>
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						placeholder='Search by title or author'
						onChange={updateQuery}
						value={query}
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<ol className='books-grid'>
					{query !== '' && books.length > 0
						? books.map((book) => (
								<Book
									key={book.id}
									book={book}
									updateBookShelf={updateBookShelves}
								/>
						  ))
						: null}

					{query !== '' && (books.length === 0 || books.error) ? (
						<p>Unable to fetch books with title {query}</p>
					) : null}
				</ol>
			</div>
		</div>
	);
};

Search.propTypes = {
	allBooks: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
};

export default Search;
