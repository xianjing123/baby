import React,{Component} from 'react'
import style from './index.module.css'
class My extends Component{
    render(){
        return <div>
            <input type="text" className={style.user_name_input} placeholder="请输入手机号码/邮箱"/>
            <input type="text" className={style.user_name_input} placeholder="请输入6-16位密码"/>
            <input type="text" className={style.user_name_input} placeholder="请输入四位验证码"/>
            <div className={style.login_in}>立即登录</div>
            
        </div>
    }
}

export default My