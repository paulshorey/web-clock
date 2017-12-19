import React from 'react';

// data
import * as anyapiActions from 'redux/actions/anyapi'; 

// style
import * as Styled from './indexStyled';

class ComponentPageContent extends React.Component {

	componentWillMount(){
		this.props.dispatch(anyapiActions.ANYAPI_GET('https://jsonplaceholder.typicode.com/'))
	}

	render() {

		// data
		// placeholder
		let renderData = <p>Fetching some data...</p>;

    // requested data
    if (this.props.dataSets) {

    	// filter
    	const DataResults = [];
    	for (let key in this.props.data) {
    		DataResults.push(<div><label>{key}</label><input type="text" value={this.props.data[key]} /></div>);
    	}

    	// render
			if (DataResults) {
				renderData = <div>
					{DataResults}
				</div>;
			}

    }

    // view
		return (
      <Styled.Content >

        <p>Dashboard page content</p>

        {renderData}

      </Styled.Content>
		);
	}
}

export default ComponentPageContent;
