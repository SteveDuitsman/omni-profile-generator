import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import ProfileGenerator from './components/ProfileGenerator';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/generator' components={{ body: ProfileGenerator }}>
        <Route path='(:adUserId)' />
    </Route>
</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
