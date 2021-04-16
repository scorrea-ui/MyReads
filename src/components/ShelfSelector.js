import React from 'react';

const ShelfSelector = ({ book, shelf, updateBookShelf }) => {
	const updateShelf = (e) => {
		updateBookShelf(book, e.target.value);
	};
	return (
		<div className='book-shelf-changer'>
			<select onChange={(e) => updateShelf(e)} defaultValue={shelf}>
				<option value='move' disabled>
					Move to...
				</option>
				<option value='currentlyReading'>Currently Reading</option>
				<option value='wantToRead'>Want to Read</option>
				<option value='read'>Read</option>
				<option value='none'>None</option>
			</select>
		</div>
	);
};

export default ShelfSelector;
