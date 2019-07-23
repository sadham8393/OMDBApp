import React from 'react';
import PropTypes from 'prop-types';
import Search from './SearchField';
import { Navbar, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle } from 'reactstrap';

const Header = (props) =>{
    return (
      <Navbar color="dark" dark expand="md"> 
        <NavbarBrand href="/">Movies Catalogue</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <Search handleChange = {props.handleChange} handleSearch ={props.handleSearch}/>
          
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Admin
            </DropdownToggle>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    )
}

Header.propTypes = { 
  onHeaderClick: PropTypes.func
} 
export default Header;