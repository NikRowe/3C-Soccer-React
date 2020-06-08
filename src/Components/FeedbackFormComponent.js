import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Col } from 'reactstrap'

function FeedbackForm() {

    const [programSelect, setProgramSelect] = useState('')
    const [playerName, setPlayerName] = useState('')
    const [parentName, setParentName] = useState('')
    const [DOB, setDOB] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [yearsPlayed, setYearsPlayed] = useState('')
    const [comments, setComments] = useState('')
    const [isSent, setIsSent] = useState(false)

    const submit = e => {
        e.preventDefault();
        fetch(`https://hooks.zapier.com/hooks/catch/7634421/oiqrim1/`, {
            method: 'POST',
            body: JSON.stringify({ programSelect, playerName, parentName, DOB, address, phone, email, yearsPlayed, comments }),
        }).then(() => setIsSent(true))
            .catch(() => alert("There was an error, please try again"))
    }

    const thankYouMessage = <p style={{ textAlign: 'center' }}> Thank you for registering, we will be in touch! </p>

    return (
        isSent
            ? thankYouMessage
            : <Form onSubmit={values => submit(values)}>
                <FormGroup>
                    <Label for="programSelect"> Program </Label>
                    <Input
                        type="select"
                        name="select"
                        id="programSelect"
                        value={programSelect}
                        onChange={e => setProgramSelect(e.target.value)}
                    >
                        <option disabled>Select A Program</option>
                        <option>Summer Camp</option>
                        <option>Small Group Training</option>
                        <option>Individual Training</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='playerName'>Player Name</Label>
                    <Input
                        required
                        type='text'
                        id='playerName'
                        name='playerName'
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='parentName'>Parent Name</Label>
                    <Input
                        required
                        type='text'
                        id='parentName'
                        name='parentName'
                        value={parentName}
                        onChange={e => setParentName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='DOB'> Player D.O.B.</Label>
                    <Input
                        required
                        type='date'
                        id='DOB'
                        name='DOB'
                        value={DOB}
                        onChange={e => setDOB(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='address'> Address </Label>
                    <Input
                        type='text'
                        id='address'
                        name='address'
                        placeholder=' (optional) '
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='phone'> Phone # </Label>
                    <Input
                        required
                        type='tel'
                        id='phone'
                        name='phone'
                        maxLength='12'
                        minLength='12'
                        placeholder='xxx-xxx-xxxx'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'> Email </Label>
                    <Input
                        required
                        type='email'
                        id='email'
                        name='email'
                        minLength='5'
                        placeholder='CoachShep@3cSoccer.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='yearsPlayed'> Competitive Years Played</Label>
                    <Input
                        required
                        type='number'
                        id='yearsPlayed'
                        name='yearsPlayed'
                        maxLength='2'
                        minLength='1'
                        value={yearsPlayed}
                        onChange={e => setYearsPlayed(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="comments"> Anything else you'd like us to know </Label>
                    <Input
                        type="textarea"
                        name="comments"
                        id="comments"
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    />
                </FormGroup>
                <Col sm={{ offset: 4 }}>
                    <Button type='submit' className='regButton'>Register</Button>
                </Col>
            </Form >
    )
}


export default FeedbackForm