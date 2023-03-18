import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import img from "../Assets/memesnationicon.png"


const Header = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' >
                <Container>
                    <Navbar.Brand href='#' bg='dark' variant='dark'>
                        <img
                            alt='Memes Nation Icon'
                            src={img}
                            width='40px'
                            height='40px'
                            className='d-inline-block align-top mr-4'
                            style={{ fontSize: "0.75rem", filter: 'brightness(0) invert(1)' }}
                            color='white'
                        /> {' '}
                        <span className='align-middle'>Memes Nation</span></Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
