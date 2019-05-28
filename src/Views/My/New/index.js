import React,{Component} from 'react'
import style from './index.module.css'

class New extends Component{
    render(){
        return<div>
            
                <div className={style.New_frist}>
                <input type="text" className={style.New_name_input} placeholder="请输入手机号"/>
                <input type="text" className={style.New_name_input} placehoder="请输入短信验证码"/>
                <input type="text" className={style.New_name_input} placeholder="设置密码(6-16个字符)"/>
                <div className={style.login_in}>
                    立即注册
                </div>
            </div> 
            
        </div>
    }
}

export default New