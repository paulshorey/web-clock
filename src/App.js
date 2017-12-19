import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// global data
import {Provider} from "react-redux";
import reduxStore from "redux/store";

// app components
import Layout from 'components/layout/Layout';

// routes
const routes = [
	{
		url: '/',
		name: 'Dashboard',
		icon: <span className="fontIcon icon-newspaper"></span>,
		component: function() {
			return require('routes/dashboard').default;
		},
	},
	{
		url: '/webclock',
		name: 'Web Clock',
		icon: <span className="fontIcon icon-stopwatch"></span>,
		component: function() {
			return require('routes/webclock').default;
		},
	},
	{
		url: '/timecard',
		name: 'Time Card',
		icon: <span className="fontIcon icon-stack"></span>,
		component: function() {
			return require('routes/timecard').default;
		},
	},
	{
		url: '/schedule',
		name: 'Redux Routing?',
		icon: <span className="fontIcon icon-calendar"></span>,
		component: function() {
			return require('routes/schedule').default;
		},
	},
];

// Routes
var Routes = [];
routes.forEach(function(route, index) {
	if (route.component) {
		Routes.push(
			<Route
				exact
				key={index}
				path={route.url}
				render={(props)=>{
					/*
						action
					*/
					const RouteComponent = route.component();
					return (
						<Layout route={route} routes={routes}>
							<RouteComponent route={route} routes={routes}/>
						</Layout>
					);
				}}
			/>
		);
	}
});

// render
class ComponentPages extends React.Component {
	render() {
		return (
			<Provider store={reduxStore}>
				<Router>
					<Switch>
						{Routes}
						<Redirect from="*" to="/" />  
					</Switch>
				</Router>
			</Provider>
		);
	}
}
export default ComponentPages;
