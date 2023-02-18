import axios from 'axios'
import { SyntheticEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../../page_layout/FormContainer'
import Config from '../../Utils/Config'
import { UserContext } from '../../UserContext'


const LoginPage = () => {
    const [user,setUser] = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            const data = {
                username:username,
                password:password,
            }
            await axios.post(Config.loginUrl ,data).then((response) => {
                console.log(response.data.access)
                setUser(response.data.access)
                console.log(user)
                localStorage.setItem('logged_in',"true")
                localStorage.setItem("Authorization",`Berear ${response.data.access}`)} )
        navigate("/")
        } catch (error) {
            console.error(error)
        }}

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="user" className='my-3'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="user"
                        placeholder="Enter User Name > it's your first name"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password" className='my-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password > you got it in your e-mail"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="secondary" type="submit">Submit</Button>
            </Form>
        </FormContainer>
    )
}

export default LoginPage
