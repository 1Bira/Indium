import { Button, Container, Form, Row, Col} from "react-bootstrap"
import React, {useState} from 'react'

const Cadastrar = () => {

    const [formData, setFormData] = useState({
        email: '',
        password:''
    });
   
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Cadastrou o Usuario!')
        //alert(formData)
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center mb-4">Cadastro</h2>
                    <Form >
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                name="email"
                                type="email" 
                                placeholder="Enter Email"
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPAssword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name="password"
                                type="password" 
                                placeholder="password"
                                onChange={handleChange} 
                            />                
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Check me out"
                                
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mt-3" onClick={handleSubmit} >
                            Submit
                        </Button>
                        
                    </Form>
                </Col>            
            </Row>
            <br/>           
            <br/>
        </Container>
        
    );
}


export default Cadastrar;