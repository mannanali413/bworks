import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, IndexRedirect, Route, browserHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'

import injectTapEventPlugin from "react-tap-event-plugin"

import App from './App'
// import {Selector, ShapeForm, ShapeArea} from 'steps'
import ShapeSelector from 'steps'
import reducers from './reducers'


require('../sass/app.scss')

injectTapEventPlugin();

const store = createStore(
    reducers,
    applyMiddleware(reduxPromise)
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/step1" />
                <Route path='step1' component={ShapeSelector} />
                // <Route path='step2' component={ShapeDimensionInput} />
                // <Route path='step3' component={ShapeAreaInfo} /> 
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// this.props.location.query