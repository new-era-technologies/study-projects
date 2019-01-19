import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import routes from './routes/routes';
import * as serviceWorker from './serviceWorker';
import './index.scss';


const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            {routes.map(({path, exact, component}, i) => <Route key={i} path={path} exact={exact}
                                                                component={component}/>)}
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
