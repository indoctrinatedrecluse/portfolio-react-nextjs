// This page should contain information about the author's qualifications, education, and work experience.


import React, { useState } from 'react';
import Head from 'next/head';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap elements from react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import local css
import styles from '../styles/Projects.module.css';

export default function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

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
                { /* Read the projects.json file and display the information in a bootstrap carousel with cards */ }
                { /* TODO: Automate the creation of the carousel items from projects.json file */}
                <Carousel id="projectsCarousel" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src="https://via.placeholder.com/80" alt="80" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://via.placeholder.com/100" alt="100" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
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