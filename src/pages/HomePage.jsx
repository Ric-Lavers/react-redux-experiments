import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../redux/actions';
import logo from '../images/react.svg';

const mapStateToProps = state => ({
	data: state.data,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});

class HomePage extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
