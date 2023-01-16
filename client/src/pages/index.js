import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
/** importing our pages */
import Tracks from './tracks';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
    </Router>
  );
}
