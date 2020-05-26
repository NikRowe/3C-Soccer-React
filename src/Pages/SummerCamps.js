import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import FeedbackForm from '../Components/FeedbackFormComponent';


class SummerCamps extends Component {
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
                    <h1 className="col-sm-6 col-md-5 text-nowrap pageTitle"> Summer Camps </h1>
                </div>
                <div style={{fontSize: 20}}>
                    <p>Due to COVID-19 restrictions, our Summer Camp scheduled for <span style={{fontWeight: 'bold'}}>June 16th - July 10th</span> has been postponed.</p>
                    <p>To receive updates on camp openings:</p>
                    <Button className="navButton font-weight-bold" onClick={this.toggleModal}>Register</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className='modalHeader' toggle={this.toggleModal} > <h1>Register for Camp! </h1> </ModalHeader>
                    <ModalBody>
                        <FeedbackForm />
                    </ModalBody>
                </Modal>
            </>
        )
    }

}

export default SummerCamps