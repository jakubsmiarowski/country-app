import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import { getCountries } from './actions/actions-countries';
import DevTools from './DevTools';
import routes from './routes';
import './country.css';


render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}/>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());