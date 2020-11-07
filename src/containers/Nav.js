import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
    return (
        <div className="Navigation">

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/product">감자마켓♪</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/about">감자마켓이란?</Nav.Link>
                    <Nav.Link href="/board">게시판</Nav.Link>
                    <Nav.Link href="#pricing">장바구니</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        </div>
    );
};

export default Navigation;
