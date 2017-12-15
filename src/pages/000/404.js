import React from 'react';
import { Link } from 'react-router-dom';

class ComponentPageContent extends React.Component {
	render() {
		return (
            <h1 >

              <p>Please check your url. </p>
              <p><Link to="/">Click here to go back to the dashboard</Link></p>

            </h1>
		);
	}
}

export default ComponentPageContent;
