import styled from 'styled-components';
const perimeterPadding = '1rem';

/*
	notes:
	* Built version (as in "npm run build") can't handle "%" height on a container layout element. So, use "vh" instead of "%" wherever possible
*/
export const Layout = styled.div`
	&.Layout {
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
			font-size:2rem;
			> * {
				padding:${perimeterPadding};
			}
			.logo {
				line-height:100%;
				&.right {
					float:right;
				}
				.icon-stopwatch {
					font-size: 78%;
					vertical-align: top;
				}
			}
		}


		/*
			hamburger & nav
			* hamburger is a hack - to get the nav to hide/show without any javascript library, or even worse without targeting a specific element
			* nav must follow directly after the hamburger input checkbox
		*/
		.hamburger.label {
			font-size:2rem;
			line-height:100%;
			transform:rotate(90deg);
			position:absolute;
			left:0;
			top:0;
			color:${window.theme.colorOnDark1};
			padding:${perimeterPadding};
			/* show@ mobile widths */
			display:none;
			@media (max-width: 750px) {
				display:inline-block;
			}
		}
		.hamburger.input {
			width:2rem;
			height:2rem;
			position:absolute;
			left:0;
			top:0;
			margin:${perimeterPadding};
			/* the hack... */
			opacity:0;
			/* the nav sidebar element... */
			&:checked + div {
				display:block;
				max-width:750px;
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
			font-size:1.5rem;
		}


		/*
			etc
		*/
		.page {
			background:${window.theme.colorDark3};
			background:${window.theme.colorOnDark3};
			flex-grow:1;
			> * {
				padding:${perimeterPadding};
			}
			font-size:1rem;
			.pageContent {
				@media (max-width: 750px) {
					min-width: calc(100vw - ${perimeterPadding} - ${perimeterPadding});
				}
			}
		}
	}
`;