import React from 'react'
import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'

function FeedbackForm() {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor='playerName'>Player Name</Label>
                <Input
                    required
                    type='text'
                    id='playerName'
                    name='playerName'
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor='parentName'>Parent Name</Label>
                <Input
                    required
                    type='text'
                    id='parentName'
                    name='parentName'
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor='DOB'> Player D.O.B.</Label>
                <Input
                    required
                    type='date'
                    id='DOB'
                    name='DOB'
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor='address'> Address </Label>
                <Input
                    type='text'
                    id='address'
                    name='address'
                    placeholder=' (optional) '
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
                />
            </FormGroup>
            <Col sm={{ offset: 4}}>
                <Button type='submit' className='regButton'>Register</Button>
            </Col>
        </Form>
    )
}

export default FeedbackForm