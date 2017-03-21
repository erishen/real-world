import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class InterviewPage extends Component {
    static propTypes = {

    }

    render() {
        return (<button className="btn btn-warning" type="submit">Button</button>);
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, {})(InterviewPage)