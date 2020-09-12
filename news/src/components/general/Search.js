import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as newsActions from '../actions/newsActions'

class Search extends Component {

    
    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapsStateToProps = (reducers) => {
    return reducers.newsReducer;
}

export default connect(mapsStateToProps, newsActions)(Search);