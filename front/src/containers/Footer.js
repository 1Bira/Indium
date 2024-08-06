import {Container, Row, Col, Image, Stack, NavLink, Nav} from 'react-bootstrap'

const Footer =() => {
    return (
        <footer>
            <Container fluid>
                <Row className='bg-primary text-white p-4'>
                    <Col className='mx-5'>
                        <Stack>
                        <Image 
                            src=''
                            alt=''
                            rounded
                            width={150}
                            height={150}
                        />
                        <h2>Company Name</h2>
                        <p>Company tagline</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className='flex-colum fs-5'>
                            Useful Link
                            <NavLink href='#' className='text-white' >Nome</NavLink>
                            <NavLink href='#' className='text-white' >About</NavLink>
                            <NavLink href='#' className='text-white' >Products</NavLink>
                            <NavLink href='#' className='text-white' >Nome</NavLink>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;