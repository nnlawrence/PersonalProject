import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Landing from './components/Landing/Landing';

export default (
    <Switch>
        <Route exact path='/' component={ Landing } />
        <Route path='/form' component={ Form } />
    </Switch>
)