import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

import PageTitle from '../../Layout/AppMain/PageTitle';
import { Table } from 'reactstrap';

const NotesTable = props => {
  return (
    <Fragment>
      <PageTitle
        heading="Notes"
        subheading="manage all notes."
        icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
      />
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Row>
          <Col lg="12">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Simple table</CardTitle>
                <Table className="mb-0" bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default NotesTable;
