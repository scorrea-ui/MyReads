import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

class BooksApp extends Component {
	state = {
		wantToRead: [],
		currentlyReading: [],
		read: [],
		books: [],
	};

	async componentDidMount() {
		this.getAllBooks();
	}

	filterShelves(books, shelf) {
		const filteredBooks = books.filter((book) => book.shelf === shelf);
		return filteredBooks;
	}

	async getAllBooks() {
		try {
			const books = await BooksAPI.getAll();
			const wantToRead = this.filterShelves(books, 'wantToRead');
			const currentlyReading = this.filterShelves(books, 'currentlyReading');
			const read = this.filterShelves(books, 'read');
			this.setState({ wantToRead, currentlyReading, read });
		} catch (e) {
			throw new Error(e);
		}
	}

	async updateBookShelf(book, shelf) {
		try {
			await BooksAPI.update(book, shelf);
			await this.getAllBooks();
		} catch (e) {
			throw new Error(e);
		}
	}

	render() {
		return (
			<div className='app'>
				<Switch>
					<Route
						path='/'
						exact
						component={() => (
							<Home
								currentlyReading={this.state.currentlyReading}
								read={this.state.read}
								wantToRead={this.state.wantToRead}
								updateBookShelf={(book, shelf) =>
									this.updateBookShelf(book, shelf)
								}
							/>
						)}
					></Route>
					<Route
						path='/search'
						component={() => (
							<Search
								allBooks={this.state.books}
								updateBookShelf={(book, shelf) =>
									this.updateBookShelf(book, shelf)
								}
							/>
						)}
					></Route>
				</Switch>
			</div>
		);
	}
}

export default BooksApp;
