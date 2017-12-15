import React from 'react';
import { connect } from 'react-redux';

import * as Styled from './TopStyled';

class Top extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Top will receive props',nextProps);
    }

	render() {
        console.log('Top render',this.props);
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

function mapStateToProps(state) {
    console.log('mapStateToProps',state);
    return {
        page: state.page
    }
}
export default connect(mapStateToProps)(
    TopConnected
);
