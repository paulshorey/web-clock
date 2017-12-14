// global theme variables ${window.theme} for global styles -- will also be available to component styles without having to import again:
import 'window/theme.js';
// global styles:
import 'indexStyled.js';

// normal react stuff:
import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryErrorBoundary from 'components/error/PrimaryErrorBoundary';

// top-level routes are delegated to their own file
import Pages from './Pages';

// render
ReactDOM.render(
	<PrimaryErrorBoundary>
		<Pages />
	</PrimaryErrorBoundary>,
	document.getElementById('root')
);
