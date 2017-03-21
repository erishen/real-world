import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/interview.css'

class InterviewPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div id="interview_div">
                <button className="btn btn-warning" type="submit">Button</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, {})(InterviewPage)