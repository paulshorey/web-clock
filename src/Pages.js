import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'components/layout/Layout';

// data, so if the number of routes grows or markup changes, we wont have to manage all the html manually
var pages = [
	{
		url: '/',
		name: 'dashboard',
		icon: <span className="icon-newspaper"></span>,
		component: function() {
			return require('pages/dashboard').default;
		},
	},
	{
		url: '/webclock',
		name: 'web clock',
		icon: <span className="icon-stopwatch"></span>,
		component: function() {
			return require('pages/webclock').default;
		},
	},
	{
		url: '/timecard',
		name: 'time card',
		icon: <span className="icon-stack"></span>,
		component: function() {
			return require('pages/timecard').default;
		},
	},
	{
		url: '/schedule',
		name: 'schedule',
		icon: <span className="icon-calendar"></span>,
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
					const RouteComponent = page.component();
					return (
						<RouteComponent history={props.history} page={page} />
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
				<Layout pages={pages}>
					<Switch>
						{Routes}
					</Switch>
				</Layout>
			</Router>
		);
	}
}
export default ComponentPages;
