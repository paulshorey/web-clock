import React from 'react';

import * as Styled from './TopStyled';

class Top extends React.Component {

	render() {
        const { page={}, className='' } = this.props;
        return (
            <Styled.Top className={className + " Top"}>
                <h1 className="logo right">{page.name} {page.icon}</h1>
            </Styled.Top>
        );
    }
    
}


// connect global data
// when {window.store.top} changes, update {this.state.top}
class TopConnected extends React.Component {
    constructor(){
        super();
        this.state = {
            page: window.store.page,
        };
    }
    componentWillMount() {
        window.store.watch('page', (name, oldValue, value) => {
            this.setState({ [name]: value });
            return value;
        });
    }
    componentWillUnmount() {
        window.store.unwatch('page');
    }
    render() {
        return <Top page={this.state.page} />;
    }
}

export default TopConnected;
