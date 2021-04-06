import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import NotesTable from '../Notes/NotesTable';

const Notes = ({ match }) => (
  <Fragment>
    <Route path={`${match.url}/notes`} component={NotesTable} />
  </Fragment>
);

export default Notes;