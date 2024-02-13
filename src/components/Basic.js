import React from 'react'
import { Container, Navbar, NavItem } from 'react-bootstrap'

const Basic = () => {
    return (
        <>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container style={{flex:"row"}}>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        <NavItem>
                            Home
                        </NavItem>
                        <NavItem>
                            Home
                        </NavItem>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}

export default Basic
