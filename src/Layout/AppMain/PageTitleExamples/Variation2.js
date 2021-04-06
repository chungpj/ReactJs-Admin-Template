import React, { Component, Fragment } from 'react';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledTooltip
} from 'reactstrap';

import { faStar, faBusinessTime, faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast, Slide } from 'react-toastify';

export default class TitleComponent2 extends Component {
  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5
    });
  }

  render() {
    return (
      <Fragment>
        <Button
          className="btn-summary mr-3"
          color="info"
          id="Tooltip-123"
        >
          <span className="btn-icon-wrapper pr-2 opacity-7">
            <FontAwesomeIcon icon={faPlus} />
          </span>
            Create
        </Button>

        <UncontrolledDropdown className="d-inline-block">
          <DropdownToggle color="success" className="btn-shadow" caret>
            <span className="btn-icon-wrapper pr-2 opacity-7">
              <FontAwesomeIcon icon={faBusinessTime} />
            </span>
            Options
          </DropdownToggle>

          <DropdownMenu right>
            <Nav vertical>
              <NavItem>
                <NavLink href="#">
                  <i className="nav-link-icon lnr-upload"> </i>
                  <span>Import from Excel</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">
                  <i className="nav-link-icon pe-7s-download"> </i>
                  <span>Export to Excel</span>
                </NavLink>
              </NavItem>
            </Nav>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    );
  }
}
