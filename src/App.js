import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// global data
import {Provider} from "react-redux";
import reduxStore from "redux/store";

// app components
import Layout from 'components/layout/Layout';

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
window.page = pages[0];

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
					window.store.page = page;
					const RouteComponent = page.component();
					return (
						<RouteComponent page={page} />
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
			<Provider store={reduxStore}>
				<Router>
					<Layout pages={pages}>
						<Switch>
							{Routes}
							<Route path="*" component={function() { return require('pages/000/404').default; }} />  
						</Switch>
					</Layout>
				</Router>
			</Provider>
		);
	}
}
export default ComponentPages;
