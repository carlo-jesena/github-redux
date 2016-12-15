import React from 'react';
import {connect} from 'react-redux';

import StarRater from './star-rater';
import * as actions from '../actions/index-actions';

export class Repository extends React.Component {
	constructor (props) {
		super(props);
		this.changeRating = this.changeRating.bind(this);
	}

	changeRating(rating) {
		this.props.dispatch(
			actions.rateRepo(this.props.repository.id, rating)
		);
	}

	render() {
		return (
			<div className="repository">
				{this.props.repository.name}
				&nbsp;
				<StarRater
					rating={this.props.repository.rating}
					onChange={this.changeRating}
				/>
			</div>
		)
	}
}

export default connect()(Repository);
