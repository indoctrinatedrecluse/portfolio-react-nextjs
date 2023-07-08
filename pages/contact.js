// Create a landing page for the website which contains a global navbar and footer, both sticky.


import React, { useState } from 'react';
import Head from 'next/head';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap navbar from react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
// import social media icons from react-bootstrap
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
// import local css
import styles from '../styles/Contact.module.css';
// import extra css
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Portfolio | Landing</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* Use a bootstrap5 sticky navbar */}
            <Navbar bg="dark" variant="dark" fixed="top">
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
                {/* Add an unordered list of contacts from social media websites with links to their respective pages */}
                <div className={styles.listofcontacts}>
                    <ul>
                        <li>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>
                            <a href="https://www.linkedin.com/in/matthew-hy-1a24720b1" target="_blank">Matthew (LinkedIn)</a>
                        </li>
                    </ul>
                </div>
            </main>

            {/* Use a bootstrap5 sticky footer */}
            <footer className={styles.footer}>
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
            </footer>
        </div>
    )
}