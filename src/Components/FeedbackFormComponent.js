import React from 'react'
import { Button } from 'reactstrap'

function FeedbackForm() {
    return (
        <form>
            <label htmlFor="playerName"> Player Name </label>
            <input
                type='text'
                name='playerName'
                required
            />
            <br/>
            <label htmlFor="parentName"> Parent Name </label>
            <input
                type='text'
                name='parentName'
                required
            />
            <br/>
            <label htmlFor="DOB"> D.O.B. </label>
            <input
                type='text'
                name='DOB'
                required
                minLength='8'
                maxLength='10'
                placeholder='xx/xx/xxxx'
            />
            <br/>
            <label htmlFor="years"> Years Played </label>
            <input
                type='number'
                name='years'
                required
                min='1'
                max='2'
            />
            <br/>
            <label htmlFor="address"> Address </label>
            <input
                type='text'
                name='address'
                placeholder=' (optional) '
            />
            <br/>
            <label htmlFor="email"> E-Mail </label>
            <input
                type='email'
                name='email'
                required
            />
            <br/>
            <label htmlFor="phone"> 10-Digit Phone # </label>
            <input
                type='tel'
                name='phone'
                required
                maxLength='12'
                minLength='12'
                placeholder='xxx-xxx-xxxx'
            />
            <br/>
            
            <Button type='submit'>Send It!</Button>
        </form>
    )
}

export default FeedbackForm