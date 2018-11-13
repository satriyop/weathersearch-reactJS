import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }
		self = this;
	}

	onInputChange(event) {
		console.log(event.target.value);
		self.setState({term: event.target.value});
	}


	onFormSubmit(event) {
		event.preventDefault();
		//we need ot go and fetch weather data
		self.props.fetchWeather(self.state.term);
		self.setState({term: ''});
	}

	render() {
		return (
			<form 
			onSubmit={this.onFormSubmit}
			className="input-group">
				<input 
					placeholder="Get a five days forecast in your fav cities"
					className="form-control"
					value= { this.state.term }
					onChange={ this.onInputChange }
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary"> Submit </button>
				</span>
			</form>
		);
	}

}

//fetchWeather is the Action we have imported into the search_bar component. 
//The following functions connect the Action to our component and provide it as props for us 
//to call in the onformSubmit method

//mapDispatchToProps is something that you will use to provide the action creators as props to your component

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather}, dispatch);

}

export default connect(null, mapDispatchToProps)(SearchBar);