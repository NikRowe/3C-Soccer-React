import React, { Component } from 'react';
import { Button } from 'reactstrap'


class SummerCamps extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <h1 className="col-sm-6 col-md-5 text-nowrap pageTitle"> Summer Camps </h1>
                </div>
                <div style={{fontSize: 20}}>
                    <p>Due to COVID-19 restrictions, our Summer Camp scheduled for <span style={{fontWeight: 'bold'}}>June 16th - July 10th</span> has been postponed.</p>
                    <p>To receive updates on camp openings:</p>
                    <Button className="navButton font-weight-bold">Register</Button>
                </div>
            </>
        )
    }

}

export default SummerCamps