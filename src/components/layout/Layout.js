import React from 'react';

import Top from 'components/layout/components/Top';
import Nav from 'components/layout/components/Nav';

import * as Styled from './LayoutStyled';

class Layout extends React.Component {

	render() {
		var { history } = this.props;
		return (
			<Styled.Container>
				<Styled.FromTop>

					{/* TOP content (header) */}
					<Top history={history} />

					<Styled.FromLeft>

						{/* LEFT  content (nav) */}
						{this.props.pages && (
							<Nav history={history} pages={this.props.pages} pathname={history.location.pathname} />
						)}
						{/* RIGHT content (page) */}
						<Styled.Content history={history}>
							{this.props.children}
						</Styled.Content>
						
					</Styled.FromLeft>

				</Styled.FromTop>
			</Styled.Container>
		);
	}
}

export default Layout;
