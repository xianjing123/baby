// 路由配置文件
import React from 'react';
import { HashRouter as Router, Route,Redirect,Switch } from "react-router-dom";
import Package from "../Views/Package";
import Head from "../Views/Head";
import Home from "../Views/Home";
import Cart from "../Views/Cart";
import My from "../Views/My";
import App from "../App";
import {Provider} from 'react-redux'
import store from '../Store'

const router = <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/package" component={Package}/>
                <Route path="/head" component={Head}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/my" component={My}/>
                <Redirect from="/" to="/home"/>
            </Switch>
        </App>
    </Router>
    </Provider>

export default router;