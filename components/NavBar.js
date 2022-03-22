import React from "react";
import {
  Col,
  Container,
  Navbar,
  Row,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Container>
      <Navbar expand="md" light>
        <NavbarBrand href="/">
          <img src="assets/logo/logo.png" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse className="justify-content-end " navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">GALLERY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">FLEET</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">NEWS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">CONTACT</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button className={styles.loginButton}>Login / Register</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
