// This page should contain information about the author's qualifications, education, and work experience.


import React, { useState } from 'react';
import Head from 'next/head';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap elements from react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import social media icons from react-social-icons
import { SocialIcon } from 'react-social-icons';
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
                    <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
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
                        <img src="/images/project1.jpg" alt="Project 1" />
                        <Carousel.Caption>
                            <h3 className={styles.item_header}>Portfolio website</h3>
                            <Button href="/" variant="dark" target='_blank'>View</Button>
                            <p className={styles.item_description}>Written in React NextJS using Bootstrap 5+</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/project2.jpg" alt="Project 1" />
                        <Carousel.Caption>
                            <h3 className={styles.item_header}>Java Samples</h3>
                            <Button href="https://github.com/indoctrinatedrecluse/java_tutoring_lessons" variant="light" target='_blank'>View</Button>
                            <p className={styles.item_description}>Snippets in Core Java for teaching</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </main>

            {/* Use a bootstrap5 sticky footer */}
            <footer className={styles.footer}>
                <Navbar bg="light" variant="light" fixed="bottom">
                    <Container>
                        <Navbar.Brand href="/landing">Portfolio</Navbar.Brand>
                        <Nav className="ms-auto">
                            <SocialIcon className={styles.icon_margin} url="https://github.com/matth1gh" />
                            <SocialIcon className={styles.icon_margin} url="matthew.hy02@gmail.com" />
                            <SocialIcon className={styles.icon_margin} url="https://www.linkedin.com/in/matthew-hy-1a24720b1/" />
                        </Nav>
                    </Container>
                </Navbar>
            </footer>
        </div>
    )
}