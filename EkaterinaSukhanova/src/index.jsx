import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'components/Header';
import CommentsListContainer from 'containers/CommentsListContainer';
import Home from 'components/Home';
import UserListContainer from 'containers/UserListContainer';
import ContentContainer from 'containers/ContentContainer';
import ChatContainer from 'containers/ChatContainer';

import routes from './routes';
import store from './store';
import menu from './menu';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header size='big'>
                    {menu.map((item, idx) => <Link key={idx} to={item.link}>{item.text}</Link>)}
                </Header>
                <Switch>
                    {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>
            </Fragment>
        );
    }
}

ReactDom.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
    document.getElementById('root')
);
