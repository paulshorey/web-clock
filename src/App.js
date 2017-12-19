import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import logger from "redux-logger";

// app data
import * as appReducers from "redux/reducers";

// app view
import Layout from 'components/layout/Layout';

// done importing...

const history = createHistory();
const middleware = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(
  // combineReducers({...appReducers, routing:routerReducer}),
  routerReducer,
  applyMiddleware(middleware),
);

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);


// data, so if the number of routes grows or markup changes, we wont have to manage all the html manually
const pages = [
	{
		url: '/',
		name: 'Dashboard',
		icon: <span className="fontIcon icon-newspaper"></span>,
		component: function() {
			return require('pages/dashboard').default;
		},
	},
	{
		url: '/webclock',
		name: 'Web Clock',
		icon: <span className="fontIcon icon-stopwatch"></span>,
		component: function() {
			return require('pages/webclock').default;
		},
	},
	{
		url: '/timecard',
		name: 'Time Card',
		icon: <span className="fontIcon icon-stack"></span>,
		component: function() {
			return require('pages/timecard').default;
		},
	},
	{
		url: '/schedule',
		name: 'Redux Routing?',
		icon: <span className="fontIcon icon-calendar"></span>,
		component: function() {
			return require('pages/schedule').default;
		},
	},
];

// <Route />s, to be put into <Router />
// includes <Layout /> which includes <Top /> and <Nav /> etc
var Routes = [];
pages.forEach(function(page, index) {
	if (page.component) {
		Routes.push(
			<Route
				exact
				key={index}
				path={page.url}
				render={(props)=>{
					// reduxStore.dispatch(reduxActions.pageChange(page));
					const RouteComponent = page.component();
					return (
						<RouteComponent page={page} />
					);
				}}
			/>
		);
	}
});

const AppContainer = () => (
	<ConnectedSwitch>
		{Routes}
		<Route path="*" component={function() { return require('pages/000/404').default; }} />  
	</ConnectedSwitch>
);

const App = connect(state => ({
  location: state.location,
}))(AppContainer)

// render component
class ComponentPages extends React.Component {
	render() {
		return (
			<Provider store={store}>
		    <ConnectedRouter history={history}>
		    	<Layout pages={pages}>
		      	<App />
		      </Layout>
		    </ConnectedRouter>
		  </Provider>
		);
	}
}
export default ComponentPages;
