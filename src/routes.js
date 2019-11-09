import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile';
import Auth from './components/Auth/Auth';
import Menu from './components/Menus/Menu';

export default (
    <Switch>
        <Route exact path='/' component={ Landing } />
        <Route path='/form' component={ Form } />
        <Route path='/profile' component={ Profile } />
        <Route path='/auth/login' component={ Auth } />
        <Route path='/menu/:id' component={ Menu } />
    </Switch>
)