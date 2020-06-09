import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* The Video */}
                    <video autoPlay muted loop id="bgVideo">
                        <source src="Img/NewHomeVid.mp4" alt="3C Video" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}

export default Home