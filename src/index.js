// global theme variables ${window.theme} for global styles -- will also be available to component styles without having to import again:
import 'window/theme';
// global styles:
import 'indexStyled';

// windowX
import 'window/store';

// normal react stuff:
import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryErrorBoundary from 'components/error/PrimaryErrorBoundary';

// all app Javascript belongs in App
// this index file simply used for global CSS, and linking the app to the index HTML webpage
import App from './App';

// render
ReactDOM.render(
	<PrimaryErrorBoundary>
		<App />
	</PrimaryErrorBoundary>,
	document.getElementById('root')
);
