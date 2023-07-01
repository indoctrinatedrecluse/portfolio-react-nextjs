// Create a landing page for the website which contains a global navbar and footer, both sticky.


import React, { useState } from 'react';
import Head from 'next/head';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap navbar from react-bootstrap
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import local css
import styles from '../styles/Landing.module.css';

export default function Landing() {
    return (
        <div>
            <Head>
                <title>Portfolio | Landing</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* Use a bootstrap5 sticky navbar */}
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/landing">Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/landing">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <main className={styles.main}>
                <h2>Matthew Hy</h2>
                <p>Software Developer</p>
            </main>

            {/* Use a bootstrap5 sticky navbar as a footer */}
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand href="/landing">Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/landing">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}