import React,{Component} from 'react'
import style from './index.module.css'
// import React from "react";
import {connect} from 'react-redux'
import {hideTabbar,showTabbar}from '../Package/action'

class My extends Component{
    render(){
        return <div>
            <p onClick={()=>{
                this.props.history.push("/home")
            }} className={style.reset}>返回</p>
            <div className={style.user_frist}>
            <input type="text" className={style.user_name_input} placeholder="请输入手机号码/邮箱"/>
            <input type="text" className={style.user_name_input} placeholder="请输入6-16位密码" />
            <input type="text" className={style.user_name_input} placeholder="请输入四位验证码"/>
            <img src="//d.beibei.com/checkcode/show.html" alt="" className={style.photo}/>
            </div>
            <div className={style.login_in}>立即登录</div>

            <div className={style.register}>
                <span onClick={()=>{
                    this.props.history.push("/new")
                }}>新人注册</span>
                <span>手机号快速登录</span>
                <span>忘记密码</span>
            </div>
            
        </div>
    }
    componentDidMount(){
        this.props.hideTabbar();
    }
    componentWillUnmount(){
        this.props.showTabbar();
    }
}

var mapStateToProps = ()=>{
    return {

    }
}

var mapDispatchToProps = {
    getMoney(){
        console.log("需要钱")
    },
    hideTabbar,
    showTabbar

}


export default connect(mapStateToProps,mapDispatchToProps)(My);