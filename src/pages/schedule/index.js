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

              <p>We now have "react-router v4", or "react-router-dom". But this code test requires "State based routing with Redux". How do do this?</p>
							<p>
								The real question, I realized, is: "Why do this?". Why use Redux to manage routes? The reasons I could think of is:
							</p>
							<div>
								<ul>
									<li>If we have to load the routes from an external API --- however, there are more to consider with this, so this is beyond the scope of a simple code test.</li>
									<li>We probably just want to --- initiate routes programmatically, and update the global data store when the routes change, so that we may display the title/url of the current route in random parts of the application, or use that knowledge to load appropriate components.</li>
								</ul>
							</div>
							<div>
								Simple solution:
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
								Next - how do I get the active route name to show up in the header?
<pre>
{`
	// well, time to install Redux and React-Redux and make it work with react-router-dom
	// for this project, I will try to get that to work, because I already set this up using react-router-dom, so I am curious if and how it will work
	
	// now after fiddling with this for a while, I do not think redux is a good match with react-router-dom (react-router v4), 
	// at least not if you want to use redux to manage the routes or even current route

	// but there are advantages to using react-router-dom (react-router v4), and as long as you can use something else to remember the routes or current route, then it would be no problem
	// luckily there is something else, but I'm out of time now :P
	
`}
</pre>
						</div>

            </Styled.Content>
		);
	}
}

export default connect()(ComponentPageContent);
