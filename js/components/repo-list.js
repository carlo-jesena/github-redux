import React from 'react';
import Repository from './repo';

export default class RepositoryList extends React.Component {
	constructor (props) {
		super(props);
		this.addRepository = this.addRepository.bind(this);
	}

	addRepository () {
		const repositoryName = this.repositoryNameInput.value;
		// Add repo to the state
	}

	render() {
		const repositories = this.props.repositories.map(repository => {
			return <Repository repository={repository} key={repository.name} />
		});

		return (
			<div className="repository-list">
				{repositories}
				<input type="text" ref={ref => this.repositoryNameInput = ref} /> {/* ??? */}
				<button type="button" onClick={this.addRepository}>
					Add Repository
				</button>
			</div>
		)
	}


}
