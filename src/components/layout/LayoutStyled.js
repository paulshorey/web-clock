import styled from 'styled-components';

/*
	notes:
	* Built version (as in "npm run build") can't handle "%" height on a container layout element. So, use "vh" instead of "%" wherever possible
*/
export const Layout = styled.div`
	&.Layout {
		display:flex;
		flex-direction:column;
		min-height:100vh;
		.content {
			display:flex;
			flex-direction:row;
			flex-grow:1;
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
			padding:${window.theme.perimeterPadding};
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
			margin:${window.theme.perimeterPadding};
			/* the hack... 
			opacity:0;*/
			/* the nav sidebar element... 
			&:checked + div {
				display:block;
				max-width:750px;
			}*/
		}
		.nav {
			width:${window.theme.sidebarWidth};
			@media (min-width: 751px) {
				min-width:${window.theme.sidebarWidth};
			}
			> * {
				padding:${window.theme.perimeterPadding};
			}
			/* hide@ mobile widths */
			max-width:${window.theme.sidebarWidth};
			@media (max-width: 750px) {
				max-width:0;
			}
			transition: max-width 1s;
			font-size:1.5rem;
			&.opened {
				display:block;
				max-width:500px;
			}
		}


		/*
			etc
		*/
		.route {
			background:${window.theme.colorDark3};
			color:${window.theme.colorDark1};
			flex-grow:1;
			> * {
				padding:${window.theme.perimeterPadding};
			}
			font-size:1rem;
			.routeContent {
				@media (max-width: 750px) {
					min-width: calc(100vw - ${window.theme.perimeterPadding} - ${window.theme.perimeterPadding});
				}
			}
		}
	}
`;