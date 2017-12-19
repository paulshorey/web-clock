import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from './NavStyled';

class ComponentNav extends React.Component {

	renderLinks = (links: any) => {
		return links.map(function(link, index){
			return (
				<NavLink
					exact
					key={link.url + index}
					className="item"
					activeClassName="active"
					to={link.url}
				>
					{link.icon || null}
					<span>{link.name}</span>
				</NavLink>
			);
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			console.log('route changed', this.props.location);
		}
	  }

	render() {
		return (
			<Styled.Nav className={this.props.className + " Nav"}>
				{this.renderLinks(this.props.routes)}
			</Styled.Nav>
		);
	}
}

export default ComponentNav;
