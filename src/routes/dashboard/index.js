import React from 'react';

// data
import { connect } from 'react-redux';
import * as anyapiActions from 'redux/actions/anyapi'; 

// components
import DataTable from 'components/data/DataTable';

// style
import * as Styled from './indexStyled';

// component
class ComponentPageContent extends React.Component {

	componentWillMount(){
		if (!this.props.myLocation) {
			this.props.dispatch(anyapiActions.ANYAPI_GET({prop:'myLocation', url:'http://ip-api.com/json'}))
		}
	}

	render() {
		return (
      <Styled.Content >

        <DataTable data={this.props.myLocation} />

      </Styled.Content>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log('mapStateToProps',state.anyapi.myLocation);
	return {
    myLocation: state.anyapi.myLocation
  }
}

export default connect(mapStateToProps)(ComponentPageContent);
