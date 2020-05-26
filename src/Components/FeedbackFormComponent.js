import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'

function FeedbackForm() {
    
    const [ playerName, setPlayerName ] = useState('')
    const [ parentName, setParentName ] = useState('')
    const [ DOB, setDOB ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ yearsPlayed, setYearsPlayed ] = useState('')

    const submit = e => {
        e.preventDefault();
        fetch(`https://hooks.zapier.com/hooks/catch/7634421/oiqrim1/`, {
          method: 'POST',
          body: JSON.stringify({ playerName, parentName, DOB, address, phone, yearsPlayed }),
        })
      }
    
    return (
        <Form onSubmit={values => submit(values)}>
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
            <Col sm={{ offset: 4 }}>
                <Button type='submit' className='regButton'>Register</Button>
            </Col>
        </Form>
    )
}

export default FeedbackForm