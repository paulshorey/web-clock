import { injectGlobal } from 'styled-components';
/*
	notes:
	* Built version (as in "npm run build") has trouble with "%" height on a container layout element. So, using "vh" instead of "%" wherever possible
*/

injectGlobal`
	/**************************************************
		
		RESET:

	**************************************************/
	input:-webkit-autofill {
			-webkit-box-shadow: 0 0 0px 1000px white inset;
	}
	/* 
	::-webkit-scrollbar {
	-webkit-appearance: none;
	width: 7px;
	}
	::-webkit-scrollbar-thumb {
	border-radius: 4px;
	background-color: rgba(0, 0, 0, .5);
	-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
	} 
	*/
	html, body, #app, #pages {
		height:100%;
		width:100%;
	}
	body {
		margin: 0;
		padding: 0;
	}


	/**************************************************
		

		RESPONSIVE for text size:
		* rem ~= screen width

	**************************************************/
	html {
		font-size:16.5px;
	}
	@media (max-width:950px), (max-height:750px) {
		html {
			font-size:15.5px;
		}
	}
	@media (max-width:750px), (max-height:650px) {
		html {
			font-size:14.5px;
		}
	}
	@media (max-width:380px), (max-height:380px) {
		html {
			font-size:13.5px;
		}
	}
	@media (max-width:330px), (max-height:330px) {
		html {
			font-size:12.5px;
		}
	}
	h1,h2,h3,h4,h5,h6,p {
		margin:0;
		padding:0;
		line-height:1.25rem;
	}
	p {
		margin:0.75rem 0;
		font-size:1rem;
	}
	h1 {
		font-size:1.9rem;
	}
	h2 {
		font-size:1.75rem;
	}
	h3 {
		font-size:1.6rem;
	}
	h4 {
		font-size:1.45rem;
	}
	h5 {
		font-size:1.3rem;
	}
	h6 {
		font-size:1.15rem;
	}
	li {
		padding-bottom:0.5rem;
	}


	/**************************************************
		

		RESPONSIVE FOR DEVICES:
		* do not change these @media sizes this section, these breakpoint sizes work well
		* use this as a template - copy/paste all @media blocks, then clear out any index-related styles

	**************************************************/
	
	/* 
		desktop 
	*/
	@media (min-width: 751px) and (min-height:601px) {
	}
	
	/* 
		NOT desktop 
	*/
	@media (max-width: 750px), (max-height:600px) {
	}

	/* 
		tablet portrait 
	*/
	@media (min-width:601px) and (max-width: 750px) and (min-height: 601px) {
	}

	/* 
		tablet landscape 
	*/
	@media (min-width: 750px) and (max-height: 600px) {
	}

	/* 
		phone portrait 
	*/
	@media (max-width: 600px) {
	}

	/* 
		phone landscape 
	*/
	@media (min-width:601px) and (max-width: 750px) and (max-height: 600px) {
	}

	/* 
		NOT phone
	*/
	@media (min-width: 751px), (min-width:601px) and (min-height: 601px) {
	}


	/**************************************************
		

		ICONS:

	**************************************************/
	/* .fontIcon,
	.fontIcon:before {
		width:1em;
		height:1em;
		line-height:1em; 
		font-size:1em;
		padding:0;
		margin:0;
		text-align:center;
		display:inline-block;
		vertical-align:baseline;
	}
	.fontIcon.alignWithText,
	.fontIcon.alignWithText:before {
		vertical-align:top;
	} */


	/**************************************************
		
		GLOBAL STYLES:

	**************************************************/
	* {
		font-family: ${window.theme.fontFamily};
		vertical-align:middle; /* hope this doesn't mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */
	}
	body {
		background: ${window.theme.colorBackground};
		color: ${window.theme.colorMain};
	}
	a {
		color: ${window.theme.colorLink};
		text-decoration: none;
	}
	.nav_left {
		min-width:${window.theme.sidebarNavWidth};
		margin-right:1rem;
	}
	@media (min-width:751px) {
		.nav_left {
			margin-left:1rem;
		}
	}
`;
