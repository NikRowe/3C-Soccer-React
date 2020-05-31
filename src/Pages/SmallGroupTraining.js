import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import FeedbackForm from '../Components/FeedbackFormComponent';


class SmallGroupTraining extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <div className="row">
                    <h1 className="col-sm-6 col-md-5 text-nowrap pageTitle"> Small Group/Individual Training </h1>
                </div>
                <div style={{fontSize: 20}}>
                    <p>With things changing rapidly and bans being lifted please click to register fore more info about small group training</p>
                    <Button className="navButton font-weight-bold" onClick={this.toggleModal}>Register</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className='modalHeader' toggle={this.toggleModal} > <h1>Inquire About Camp! </h1> </ModalHeader>
                    <ModalBody>
                        <FeedbackForm />
                    </ModalBody>
                </Modal>
            </>
        )
    }

}

export default SmallGroupTraining