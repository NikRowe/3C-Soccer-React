import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
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

    const toggle = () => {
        setIsOpen(!isOpen)};


    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    return (
        <Navbar sticky="top" light expand="lg" className="navbar" id="navbar">
            {/* Mobile Display Logo */}
            <NavbarBrand href="/" className="d-lg-none " id="mobileNavLogo"> <img src="/Img/Logo.png" width="125" height="125" alt="3C Soccer Logo" /> </NavbarBrand>
            {/* <Tablet>
                <NavbarBrand href="/" className="d-lg-none pt-5 mt-2"> <img src="/Img/Logo.png" width="125" height="125" alt="3C Soccer Logo" /> </NavbarBrand>
            </Tablet>
            <Mobile>
                <NavbarBrand href="/" className="d-lg-none pt-5 mt-2"> <img src="/Img/Logo.png" width="125" height="125" alt="3C Soccer Logo" /> </NavbarBrand>
            </Mobile> */}
            <NavbarToggler onClick={toggle} />
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