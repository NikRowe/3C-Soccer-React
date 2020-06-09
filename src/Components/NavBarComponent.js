import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [toggleColor, setToggleColor] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        setToggleColor(!toggleColor)
        if (toggleColor === false) {
            document.getElementById('hamburger').style.color = '#fff200'
            document.getElementById('hamburger').style.borderColor = '#fff200'
            console.log(toggleColor)
        } if (toggleColor) {
            document.getElementById('hamburger').style.color = '#1376bc'
            document.getElementById('hamburger').style.borderColor = '#1376bc'
            console.log(toggleColor)
        }
    };

    return (
        <Navbar sticky="top" light expand="lg" className="navbar" id="navbar">
            {/* Mobile Display Logo */}
            <NavbarBrand href="/" className="d-lg-none" id="mobileNavLogo"> <img src="/Img/Logo.png" width="125" height="125" alt="3C Soccer Logo" /> </NavbarBrand>
            <FontAwesomeIcon icon={faBars} onClick={toggle} id="hamburger" size="3x" className='hamburger'/>
            <Collapse isOpen={isOpen} navbar className="collapse " id="collapse">
                <Nav navbar className="mr-auto" id='navitems'>
                    <NavItem className="navButton">
                        <NavLink className="text-white" href="/about">About</NavLink>
                    </NavItem>
                    <NavItem className="navButton">
                        <NavLink className="text-white" href="/summerCamps">Summer Camps</NavLink>
                    </NavItem>
                    <NavItem className="navButton">
                        <NavLink className="text-white" href="/smallGroupTraining">Small Group/Individual Trainings</NavLink>
                    </NavItem>
                </Nav>
                {/* Desktop display logo */}
                <NavbarBrand href="/" className="desktopNavImg d-none d-lg-block mr-0 mt-5 pt-4 pb-0"><img src="/Img/Logo.png" width="150" height="150" alt="3C Soccer Logo" />
                </NavbarBrand>
            </Collapse>
        </Navbar>
    )
}

export default NavBar