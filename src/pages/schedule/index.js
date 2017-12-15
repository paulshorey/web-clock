import React from 'react';

import * as Styled from './indexStyled';

class ComponentPageContent extends React.Component {
	render() {
		return (
            <Styled.Content >

              <p>We now have "react-router v4", or "react-router-dom". But this code test requires "State based routing with Redux". How do do this?</p>
							<p>
								The real question, I realized, is: "Why do this?". Why use Redux to manage routes? The reasons I could think of is:
							</p>
							<p>
								<ul>
									<li>If we have to load the routes from an external API --- however, there are more to consider with this, so this is beyond the scope of a simple code test.</li>
									<li>We probably just want to --- initiate routes programmatically, and update the global data store when the routes change, so that we may display the title/url of the current route in random parts of the application, or use that knowledge to load appropriate components.</li>
								</ul>
							</p>
							<p>
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
							</p>
							<p>
								Next - how do I get the active route name to show up in the header?
							</p>

            </Styled.Content>
		);
	}
}

export default ComponentPageContent;
