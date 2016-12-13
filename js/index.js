require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import RepositoryList from './components/repo-list';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<RepositoryList />,
		document.getElementById('app')
	);
})
