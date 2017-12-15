import React from 'react';
import { withRouter } from 'react-router-dom';

import Nav from 'components/nav/Nav';
import Top from './components/Top';

import * as Styled from './LayoutStyled';

class Layout extends React.Component {

	/*
		to detect route change using react-router-dom
	*/
	componentWillMount() {
		const { history } = this.props;
		this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
		this.handleLocationChange(history.location);
	}
	componentWillUnmount() {
		if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
	}
	handleLocationChange = (location) => {
		// console.log('location changed!',location);
	}

	/*
		render
	*/
	render() {
		return (
			<Styled.Layout className="Layout">

				{/* TOP content */}
				<Top />

				{/* main content */}
				<div className="content">

					{/* NAV  content */}
					<label className="hamburger label">|||</label>
					<input type="checkbox" className="hamburger input"></input>
					<Nav className="nav" pages={this.props.pages} />

					{/* PAGE content */}
					<div className="page">
						<div className="pageContent">
							{this.props.children}
						</div>
					</div>
						
				</div>
			</Styled.Layout>
		);
	}
}

export default withRouter(Layout);