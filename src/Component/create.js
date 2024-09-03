import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
//import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    //let history = useHistory();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rollno, setRollNo] = useState(0);
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox)
    const postData = () => {
        axios.post(`https://648dba272de8d0ea11e82914.mockapi.io/NewCrud`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            //history.push('/read')
            navigate('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Form.Field>
                    <label>Roll No</label>
                    <input placeholder='Roll no' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>

                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
