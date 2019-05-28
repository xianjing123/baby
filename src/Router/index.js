// 路由配置文件
import React from 'react';
import { HashRouter as Router, Route,Redirect,Switch } from "react-router-dom";
import Package from "../Views/Package";
import Head from "../Views/Head";
import Home from "../Views/Home";
import Cart from "../Views/Cart";
import My from "../Views/My";
import App from "../App";
import {Provider} from 'react-redux';
import store from '../Store';
import MyTwo from '../Views/MyTwo';
import MyOne from '../Views/MyOne';
import New from '../Views/My/New'

const router = <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home} replace/>
                <Route path="/package" component={Package} replace/>
                <Route path="/head" component={Head} replace/>
                <Route path="/cart" component={Cart} replace/>
                <Route path="/my" component={My} replace/>
                <Route path="/new" component={New}/>
                <Route path="/myone" component={MyOne} replace/>
                <Route path="/mytwo" component={MyTwo} replace/>
                <Redirect from="/" to="/home"/>
            </Switch>
        </App>
    </Router>
    </Provider>

export default router;