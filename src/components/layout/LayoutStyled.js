import styled from 'styled-components';
const perimeterPadding = '1rem';

/*
	notes:
	* Built version (as in "npm run build") can't handle "%" height on a container layout element. So, use "vh" instead of "%" wherever possible
*/
export const Layout = styled.div`
	display:flex;
	flex-direction:column;
	height:100vh;
	.content {
		display:flex;
		flex-direction:row;
		flex-grow:1;
	}

	.top {
    	background:${window.theme.colorDark1};
    	color:${window.theme.colorOnDark1};
		height:${window.theme.headerHeight};
		> * {
			padding:${perimeterPadding};
		}
		.logo {
			font-size:2rem;
			line-height:100%;
			&.right {
				float:right;
			}
		}
	}
	.hamburger {
		margin:${perimeterPadding};
		/* show@ mobile widths */
		display:none;
		@media (max-width: 750px) {
			display:inline-block;
		}
	}
	.nav {
		width:${window.theme.sidebarWidth};
		> * {
			padding:${perimeterPadding};
		}

		/* hide@ mobile widths */
		max-width:${window.theme.sidebarWidth};
		@media (max-width: 750px) {
			max-width:0;
		}
		transition: max-width 1s;
	}
	.page {
    	background:${window.theme.colorDark3};
    	background:${window.theme.colorOnDark3};
		flex-grow:1;
		> * {
			padding:${perimeterPadding};
		}
	}
`;