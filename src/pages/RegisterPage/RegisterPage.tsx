import axios from 'axios'
import { SyntheticEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../../page_layout/FormContainer'
import Config from '../../Utils/Config'


const RegisterPage = () => {
    const [user, setUser] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            const data = {
                username: user,
                first_name: firstName,  
                last_name: lastName,
                password: password,
            }
        
            await axios.post(Config.registerUrl,data,{
                headers: { 'Content-Type': 'application/json' },
            
        })
        navigate("/login")
        } catch (error) {
            console.error(error)
        }}
    
    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="user" className='my-3'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="user"
                        placeholder="Contact me with your email address"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="first_name" className='my-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="last_name" className='my-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="password" className='my-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="To get a Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    )}

export default RegisterPage