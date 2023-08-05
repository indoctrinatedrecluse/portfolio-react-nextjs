// This page should contain information about the author's qualifications, education, and work experience.


import React, { useState } from 'react';
import Head from 'next/head';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap navbar from react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
// import local css
import styles from '../styles/About.module.css';
import Script from 'next/script';

export default function About() {
    return (
        <div>
            <Head>
                <title>Portfolio | About</title>
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
                { /* Create a nav tab for education */ }
                <Script src="/scripts/about.js" />
                <div className={styles.education}>
                    <h3>Education</h3>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a id="ed_t_1" class="nav-link active" aria-current="page" href="#" onClick={() => changeActiveNavPill(1)}>UCLA</a>
                        </li>
                        <li className="nav-item">
                            <a id="ed_t_2" class="nav-link" href="#" onClick={() => changeActiveNavPill(2)}>Christopher High School</a>
                        </li>
                    </ul>
                    { /* Create a bootstrap card whose contents are the author's education, and changes based on which nav pill is active */ }
                    <div className="card" id="education_info">
                        <div className="card-body">
                            <h5 className="card-title">UCLA</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Bachelor of Science in Psychobiology</h6>
                            <p className="card-text">I am currently a fourth year student at UCLA, pursuing a Bachelor of Science in Psychobiology. I am also pursuing a minor in Film, Television, and Digital Media.</p>
                            <a href="#" className="card-link">UCLA Psychology</a>
                        </div>
                    </div>
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