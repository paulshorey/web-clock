import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'components/layout/Layout';

// data, so if the number of routes grows or markup changes, we wont have to manage all the html manually
var pages = [
	{
		url: '/',
		component: function() {
			return require('pages/dashboard').default;
		},
	},
	// {
	// 	url: '/webclock',
	// 	component: function() {
	// 		return require('pages/webclock').default;
	// 	},
	// },
	// {
	// 	url: '/timecard',
	// 	component: function() {
	// 		return require('pages/timecard').default;
	// 	},
	// },
	// {
	// 	url: '/schedule',
	// 	component: function() {
	// 		return require('pages/schedule').default;
	// 	},
	// },
];

// <Route />s, to be put into <Router />
var Routes = [];
pages.forEach(function(page, index) {
	if (page.component) {
		Routes.push(
			<Route
				key={index}
				path={page.url}
				render={(props)=>{
					var RouteComponent = page.component();
					return (
						<Layout history={props.history} pages={pages}>
							<RouteComponent history={props.history} page={page} />
						</Layout>
					);
				}}
			/>
		);
	}
});


// render component
// requires ${Routes} to be an array of <Route />s
class ComponentPages extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					{Routes}
				</Switch>
			</Router>
		);
	}
}
export default ComponentPages;
