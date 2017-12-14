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
					className="link"
					activeClassName="active"
					to={link.url}
				>
					{link.icon || null}
					<span>{link.name}</span>
				</NavLink>
			);
		});
	}

	render() {
		return (
			<Styled.Nav>
				{this.renderLinks(this.props.pages)}
			</Styled.Nav>
		);
	}
}

export default ComponentNav;
