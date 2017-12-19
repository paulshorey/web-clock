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
		if (!this.props.starWars) {
			this.props.dispatch(anyapiActions.ANYAPI_GET({prop:'starWars', url:'https://swapi.co/api/people/1/?format=json'}))
		}
	}

	render() {
		return (
      <Styled.Content >

        <DataTable data={this.props.starWars} />

      </Styled.Content>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log('mapStateToProps',state.anyapi.starWars);
	return {
    starWars: state.anyapi.starWars
  }
}

export default connect(mapStateToProps)(ComponentPageContent);
