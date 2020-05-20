import React, { useState } from 'react'
import {
    Collapse,
    UncontrolledCollapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md">
                <NavbarBrand href="/" className="d-md-none"><img src="/Img/Logo.png" width="200" height="200" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/summerCamps">Summer Camps</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/smallGroupTraining">Small Group Trainings</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarBrand href="/" className="mx-auto d-none d-md-block"><img src="/Img/Logo.png" width="200" height="200" /></NavbarBrand>
                    <NavbarText className="ml-auto">by Shep</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar