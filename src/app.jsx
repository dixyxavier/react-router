/**
 * Created by dixy on 4/2/16.
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Router } from 'react-router';

import LoginHandler from './components/login.jsx';

let App = React.createClass({
    render() {
        return <div className="nav">
            <Link to="app">Home</Link><br/>
            <Link to="login">Login</Link>
        </div>
    }
});

ReactDOM.render(
    <Router>
        <Route name="app" path="/" component={App}/>
        <Route name="app" path="/app" component={App}/>
        <Route name="login" path="/login" component={LoginHandler}/>
    </Router>,
    document.getElementById('react')
);
