import React, { Fragment } from 'react';
import { Router } from 'react-router-dom'
/** importing our pages */
import Tracks from './tracks';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
    </Router>
  );
}
