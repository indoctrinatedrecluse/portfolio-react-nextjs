// Create a landing page for the website which contains a global navbar and footer, both sticky.


import React, { useState } from 'react';
import Head from 'next/head';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap navbar from react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
// import social media icons from react-social-icons
import { SocialIcon } from 'react-social-icons';
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
                {/*  Add an image to the left and a heading and paragraph to the right */}
                <div className={styles.left}>
                    <img src="/images/dog.jpg" alt="landing" className={styles.landing_img} />
                </div>
                <div className={styles.right}>
                    <h3>Welcome to my portfolio!</h3>
                    <p className={styles.description}>
                        I'm a current <a href="https://www.ucla.edu/" target="_blank">UCLA</a> undergraduate student that will be graduating in 2024 with a degree in Psychobiology B.S..
                        In my freetime, I love to play basketball, DJ music, and cook homemade meals.
                    </p>
                </div>
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