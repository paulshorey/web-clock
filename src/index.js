// global theme variables ${window.theme} for global styles -- will also be available to component styles without having to import again:
import 'indexTheme';
// global styles:
import 'indexStyled';

// javascript
import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryErrorBoundary from 'components/error/PrimaryErrorBoundary';

import App from './App';

ReactDOM.render(
	<PrimaryErrorBoundary>
		<App />
	</PrimaryErrorBoundary>,
	document.getElementById('root')
);
