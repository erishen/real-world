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
                <div id="demo"></div>

                <div id="top_div"></div>
                <div id="bottom_left_div"></div>
                <div id="bottom_right_div"></div>
                <div id="bottom_clear_div"></div>

                <div id="middle_div"></div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, {})(InterviewPage)