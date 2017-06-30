import React from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  FAQ_PAGE_ROUTE
} from '../../shared/routes';
import { APP_NAME } from '../../shared/config';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/">
            {APP_NAME}
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {[
                { route: HOME_PAGE_ROUTE, label: 'Home' },
                { route: FAQ_PAGE_ROUTE, label: 'FAQ' },
                { route: ABOUT_PAGE_ROUTE, label: 'About' }
              ].map(link =>
                (<NavItem>
                  <NavLink tag={RRNavLink} to={link.route}>
                    {link.label}
                  </NavLink>
                </NavItem>)
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
