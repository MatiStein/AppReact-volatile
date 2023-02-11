import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface Props{
children: React.ReactNode
}

const FormContainer = ({children}: Props) => {
    return (
        <Container className='py3'>
            <Row className='justify-content-md-center'>
                <Col xs={10} md={4}>
                    {children}
                </Col>
                </Row>
                </Container>
    )
}

export default FormContainer