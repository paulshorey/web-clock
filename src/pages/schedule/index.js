import React from 'react';

// store
import { connect } from 'react-redux';
import * as reduxActions from "redux/actions";

// style
import * as Styled from './indexStyled';

class ComponentPageContent extends React.Component {
	componentWillMount(){
		this.props.dispatch(reduxActions.pageChange(this.props.page));
	}
	render() {
		return (
            <Styled.Content >

				<div>
					We now have React-Router-Dom (react-router v4), which is very robust and has certain advantages.<br />
					But this code test requires "State based routing with Redux".<br />
					How do do this? I've used Redux-Router before, but felt like trying a new thing here...<br />
					<br />
				</div>
				<div>
					Knowing what route you're on, without Redux:
<pre>
{`
	import { withRouter } from 'react-router-dom';

	class Form extends React.Component {
		this.props.history.push('/theUrlYouWantToGoTo');
	}

	export default withRouter(Form);
	
`}
</pre>
				</div>
				<div>
					But how do I get the active route name to show up in the header?
<pre>
{`
	// lets add Redux...
	...
	componentWillMount(){
		this.props.dispatch(reduxActions.pageChange(this.props.page));
	}
	...
	export default connect()(ComponentPageContent);
	
`}
</pre>
				</div>
				<div>
					This is not perfect. We not only have to update our route info manually, but have to copy this fix to every page component.
<pre>
{`
	// unfortunately with React-Router-Dom (react-router v4), it is not possible to do this in one place and have it take effect whenever the route changes

	// so, lets keep using Redux-Router

	// Or, we can separate concerns, and use MobX or `}<a href="https://medium.com/@paulshorey/reactjs-a-simpler-way-than-redux-mobx-to-manage-dynamic-global-data-7450bc2400a9" target="_blank" rel="noopener noreferrer">WindowX</a>{` to manage our UI and routes state
	// And then we can use Redux for what it's best at - state of content and data - large amounts of it, spread throughout multiple components

`}
</pre>
				</div>

            </Styled.Content>
		);
	}
}

export default connect()(ComponentPageContent);
