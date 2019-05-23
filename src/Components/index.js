import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import style from './index.module.css'

class Tabbar extends Component{
    render(){
        return <nav>
            <ul className={style.tabbar_ul}>
                <li><NavLink to="/home" activeClassName={style.active} replace>今日特卖</NavLink></li>
                <li><NavLink to="/package" activeClassName={style.active} replace>9.9</NavLink></li>
                <li><NavLink to="/head" activeClassName={style.active} replace>团长</NavLink></li>
                <li><NavLink to="/cart" activeClassName={style.active} replace>购物车</NavLink></li>
                <li><NavLink to="/my" activeClassName={style.active} replace>我的</NavLink></li>
            </ul>
        </nav> 
    }
}

export default Tabbar;