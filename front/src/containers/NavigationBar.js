import { Navbar, Container, Nav, Offcanvas, Form, Button } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar >
            <Container fluid >
                <Navbar.Brand>Brand</Navbar.Brand>
                <Navbar.Offcanvas>
                    <Offcanvas.Header></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav
                        className='justify-content-end flex-grow-1 pe-3'
                        activeKey='/home'
                        onSelect={(selectedKey) => alert(`selected $(selectedKey)`)}
                        >
                            
                            <Nav.Item>
                                <Nav.Link href='/home'>Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/link-1'>Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/link-2'>Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/disabled' disabled>Disabled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Form className='d-flex'>
                            <Form.Control 
                                type='search'
                                placeholder='Search'
                                className='me-2'
                                aria-label='Search'/>
                            <Button variant='outline-sucess'>Search</Button>
                        </Form>
                    </Offcanvas.Body>
                
                </Navbar.Offcanvas>
            </Container>
        </Navbar>  
        
    );
}



export default NavigationBar;